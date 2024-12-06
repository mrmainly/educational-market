import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import cookie from "js-cookie";

import styles from "./style.module.css";
import { ChatMessage } from "../ChatMessage";
import { ChatImage } from "../ChatImage";

export const ChatBot = () => {
    const endRef = useRef<null | HTMLDivElement>(null);
    const socket = useRef<WebSocket>();
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [messages, setMessages] = useState<
        {
            type: "ongoing" | "incoming";
            is_image: boolean;
            is_sending: boolean;
            text: string;
            image?: string | ArrayBuffer | null;
        }[]
    >([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [value, setValue] = useState("");
    const [file, setFile] = useState<File | null>();
    const [fileUrl, setFileUrl] = useState<string | ArrayBuffer | null>();
    function connect(room: string) {
        socket.current = new WebSocket(`${process.env["NEXT_PUBLIC_WSS"]}/chat/${room}/`);

        socket.current.binaryType = "arraybuffer";
        socket.current.onopen = () => {};
        socket.current.onmessage = (event) => {
            const res = JSON.parse(event.data);
            if (res.status === "processing") {
                setMessages((prev) => {
                    const foundIndex = prev.findLastIndex((el) => el.is_image === true);
                    if (foundIndex > 0) {
                        prev[foundIndex] = {
                            ...prev[foundIndex],
                            is_sending: true,
                        };
                    }
                    return [...prev];
                });
                setIsProcessing(true);
            } else {
                setMessages((prev) => [
                    ...prev,
                    {
                        type: "incoming",
                        is_image: false,
                        image: null,
                        is_sending: false,
                        text: JSON.parse(event.data).response,
                    },
                ]);
                setIsProcessing(false);
            }
        };
        socket.current.onclose = () => {};
        socket.current.onerror = () => {};
    }
    const handleSend = async () => {
        if (value.length > 0) {
            if (/привет|поделись|выдай|рецепт|представь/i.test(value)) {
                setMessages((prev) => [
                    ...prev,
                    {
                        type: "incoming",
                        is_image: false,
                        is_sending: false,
                        image: null,
                        text: "Некорректное сообщение",
                    },
                ]);
            } else {
                const my_message = {
                    message: value,
                    type: "chat_message",
                    id: Date.now(),
                };
                socket.current?.send(JSON.stringify(my_message));
                setMessages((prev) => [
                    ...prev,
                    { type: "ongoing", is_image: false, is_sending: false, image: null, text: value },
                ]);
            }
        }
        setValue("");
    };
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleFile(event.target.files?.[0]);
    };
    const handleFile = (file: File | undefined) => {
        if (!file) return;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setFileUrl(reader.result);
        };
        setFile(file);
        setIsOpen(true);
    };
    const handleSendFile = () => {
        const reader = new FileReader();
        reader.readAsDataURL(file!);
        reader.onload = () => {
            if (reader.result) {
                const my_message = {
                    image: reader.result,
                    type: "image",
                };
                socket.current?.send(JSON.stringify(my_message));
                setMessages((prev) => [
                    ...prev,
                    { type: "ongoing", is_image: true, is_sending: false, image: fileUrl, text: "" },
                ]);
                setIsOpen(false);
                setFile(null);
            }
        };
    };
    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setValue(event.target.value);
    const onModalClose = () => {
        setIsOpen(false);
        setFile(null);
        setFileUrl(null);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSend();
    };
    const onEnterPress = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            handleSend();
        }
    };

    useLayoutEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "inherit";
            textareaRef.current.style.height = `${Math.max(textareaRef.current.scrollHeight, 24)}px`;
        }
    }, [value]);

    useEffect(() => {
        const cookieStore = cookie.get("ch");
        if (cookieStore) {
            connect(cookieStore);
        } else {
            fetch("https://backend.test.avareange.ru/api/v1/chat/create-room/create_room/")
                .then((res) => res.json())
                .then((res) => {
                    if (res.user_uuid) {
                        connect(res.user_uuid);
                        cookie.set("ch", res.user_uuid, { expires: 1 });
                    } else {
                        setMessages((prev) => [
                            ...prev,
                            {
                                type: "incoming",
                                is_image: false,
                                image: null,
                                is_sending: false,
                                text: "Чат на данный момент не доступен",
                            },
                        ]);
                    }
                })
                .catch(() => {
                    setMessages((prev) => [
                        ...prev,
                        {
                            type: "incoming",
                            is_image: false,
                            image: null,
                            is_sending: false,
                            text: "Чат на данный момент не доступен",
                        },
                    ]);
                });
        }
    }, []);
    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    return (
        <div className={styles.chat}>
            <div className={styles.wrapper}>
                <div className={styles.box}>
                    {messages?.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                width: "100%",
                                justifyContent: item.type === "incoming" ? "start" : "end",
                                display: "flex",
                                padding: "4px 4px 4px 4px",
                                wordBreak: "break-word",
                            }}
                        >
                            {item.is_image ? (
                                item.image ? (
                                    <ChatImage img={item.image.toString()} is_sending={item.is_sending} />
                                ) : null
                            ) : (
                                <ChatMessage message={item.text} type={item.type} />
                            )}
                        </div>
                    ))}
                    <div ref={endRef}>
                        {isProcessing && <div className={styles.processing}>Ваш запрос обрабатывается</div>}
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className={styles.chtform}>
                <label htmlFor="images" className={styles.dropContainer} id="dropcontainer">
                    <img style={{ width: 24, height: 24 }} alt="clip" src={"/icon/paper-clip.svg"} />
                    <input
                        type="file"
                        id="images"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                </label>
                <textarea
                    ref={textareaRef}
                    onChange={handleTextChange}
                    value={value}
                    rows={1}
                    className={styles.chatInputTextarea}
                    onKeyDown={onEnterPress}
                />
                <label htmlFor="formsubmit" className={styles.dropContainer}>
                    <img style={{ width: 24, height: 24 }} alt="clip" src={"/icon/send.svg"} />
                    <input id="formsubmit" type="submit" style={{ display: "none" }} />
                </label>
            </form>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <DialogBackdrop className="fixed inset-0 bg-black/30" />
                <div className="fixed inset-0 flex w-screen items-center justify-center p-2">
                    <DialogPanel className="max-w-lg space-y-4 border bg-white p-4 rounded-md">
                        <DialogTitle className="font-bold text-[#000] text-lg">Отправить изображение</DialogTitle>
                        <Description>
                            {fileUrl && <img alt="mascot" src={fileUrl.toString()} style={{ maxHeight: "300px" }} />}
                        </Description>

                        <div className="flex gap-4 justify-end">
                            <button className="text-[#000]" onClick={onModalClose}>
                                Отмена
                            </button>
                            <button onClick={handleSendFile} className="font-semibold text-[#5865F2]">
                                Отправить
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    );
};
