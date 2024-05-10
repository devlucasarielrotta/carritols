const now = new Date();
new Intl.DateTimeFormat('default',
        {
            hour12: true,
            hour: 'numeric',
            minute: 'numeric'
        }).format(now);

export const fullDate = `${now}`