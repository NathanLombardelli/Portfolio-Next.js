export const EmailTemplate = ({name, content}: { name: string, content: string }) => (
    <div>
        <p>
            {name} has submitted the contact form on your website.
        </p>
        <p>{content}</p>
    </div>
);