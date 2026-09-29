interface TitleProps {
    eyebrow: string;
    title: string;
    description?: string;
    id: string;
}

const Title = ({ eyebrow, title, description, id }: TitleProps) => (
    <header className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title" id={id}>{title}</h2>
        {description && <p className="section-intro">{description}</p>}
    </header>
);

export default Title;