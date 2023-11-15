import useHomeModel from './Model';
import Article from '../../components/Article';

export default function HomeView(props: ReturnType<typeof useHomeModel>) {
    return (
        <div>
            <Article
                title="Versículo do dia"
                content="Porque não contenderei para sempre, nem continuamente me indignarei; porque o espírito perante a minha face se desfaleceria, e as almas que eu fiz."
                index="Isaías 57:16"
            />

            <Article
                content="Porque não contenderei para sempre, nem continuamente me indignarei; porque o espírito perante a minha face se desfaleceria, e as almas que eu fiz."
                index="Isaías 57:16"
            />

            <Article
                content="Porque não contenderei para sempre, nem continuamente me indignarei; porque o espírito perante a minha face se desfaleceria, e as almas que eu fiz."
                index="Isaías 57:16"
            />

            <Article
                content="Porque não contenderei para sempre, nem continuamente me indignarei; porque o espírito perante a minha face se desfaleceria, e as almas que eu fiz."
                index="Isaías 57:16"
            />
        </div>
    );
}
