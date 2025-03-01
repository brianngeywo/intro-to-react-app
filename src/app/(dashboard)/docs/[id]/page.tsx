interface DocsPageProps {
    params: {
        id: string
    }
}

const DocsPage = ({params}: DocsPageProps) => {
    return <div>single Documentation page {params.id}</div>
}

export default DocsPage