import { gql } from "@apollo/client";
import Link from "next/link";
import Image from "next/image";
import { client } from "../lib/apolloClient";
import Layout from "../components/Layout";

const GET_TUTORIALS = gql`
    query getTutorials {
        tutorials(first: 10, after: null) {
            nodes {
                databaseId
                tutorialTitle
                tutorialDate
                tutorialPicture {
                    mediaItemUrl
                    altText
                }
            }
        }
    }
`;

export default function Tutorials(props) {
    const { tutorials } = props;

    return (
        <Layout>
            <Link href="/">
                <a>Back to the main page</a>
            </Link>
            <h1>Tutorials</h1>
            <div className="tutorial-card-container">
                {tutorials.map((tutorial) => (
                    <Link href={`tutorial/${tutorial.databaseId}`} key={tutorial.databaseId}>
                        <div className="tutorial-card">
                            <h3>{tutorial.tutorialTitle}</h3>
                            {tutorial.tutorialPicture && <Image src={tutorial.tutorialPicture.mediaItemUrl} alt={tutorial.tutorialPicture.altText} width={350} height={250} />}
                        </div>
                    </Link>
                ))}
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const response = await client.query({
        query: GET_TUTORIALS,
    });
  
    return {
        props: {
            tutorials: response.data.tutorials.nodes,
        },
    };
}