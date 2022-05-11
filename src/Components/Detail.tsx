export const Detail = ({label, text}:{label?:string,text?:string}) => 
text ? <p><strong>{label}</strong>: {text}</p> : <></>