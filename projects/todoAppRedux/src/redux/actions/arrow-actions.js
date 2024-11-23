export default function showArrow() {
    return {
        type : "SHOW_ARROW",
        payload : true
    }
}

export function hideArrow() {
    return {
        type : "HIDE_ARROW",
        payload : false
    }
}