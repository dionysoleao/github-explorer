import { useEffect, useState } from "react";
import { RepositoryItem } from "./RepositoryItem";

const repositoryInfo = {
    name: 'Unform',
    desc: 'Forms in React',
    link: 'Acessar Repositório'
}

interface Repository {
    image:string;
}

export function RepositoryList(){

    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://artesanato.plano-b.com/admin/conteudo/@type/Person/@pp/10?format=json')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    return(
        <section className="repository-list">
        <h1>Lista de Repositórios</h1>
        <ul>
            {repositories.map(repository => {
                return <RepositoryItem key={repository.image} repository={repository} />
                }
              )
            }
        </ul>
        </section>
    );
}