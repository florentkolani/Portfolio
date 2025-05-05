interface TitleProps {
    title: string;
}
const Title = ({title}: TitleProps) => {
    return (    
        <div >
            <h1 className="uppercase text-3xl font-bold text-center mb-5">
                {title}
            </h1>
        </div>
    )
}
export default Title