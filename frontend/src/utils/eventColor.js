const color = {
    Exercise: { color: "#60a5fa", bgColor: "#bfdbfe" },
    Work: { color: "#4ade80", bgColor: "#bbf7d0" },
    Social: { color: "#fb923c", bgColor: "#fed7aa" },
    Family: { color: "#c084fc", bgColor: "#e9d5ff" },
    Eating: { color: "#f472b6", bgColor: "#fbcfe8" },
    Relax: { color: "#f87171", bgColor: "#fecaca" }
};

const eventColor = (event)=>{
    return color[event];
}

export default eventColor