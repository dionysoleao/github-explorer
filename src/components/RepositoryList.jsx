import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

const repositoryInfo = {
    name: 'Unform',
    desc: 'Forms in React',
    link: 'Acessar Repositório'
}
//
export function RepositoryList(){

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return(
        <section className="repository-list">
        <h1>Lista de Repositórios</h1>
        <ul>
            {repositories.map(repository => {
                return <RepositoryItem key={repository.name} repository={repository} />
                }
              )
            }
        </ul>
        </section>
    );
}