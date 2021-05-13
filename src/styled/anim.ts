export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
            delayChildren: 0.2,
        },
    },
};

export const stagerdItems = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0 },
};

export const transitions = {
    type: "spring",
    duration: 0.8,
    bounce: 0.4,
};
