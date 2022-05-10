export const Detail = ({label, text}:{label?:string,text?:string}) => 
text ? <p>{label}: {text}</p> : <></>