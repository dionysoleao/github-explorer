interface RepositoryItemProps{
    repository: {
        image: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return(
        <div>
           {props.repository.image}
        </div>
    )
}  