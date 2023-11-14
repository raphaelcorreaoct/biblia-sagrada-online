

export default function Article({ title, content, onShare, index }: {
  title?: string;
  content:string;
  onShare?: ()=>void;
  index?: string;
}) {
  return (
    <article className="max-w-[700px] mb-20">
      {title &&
        (<header>
          <h2 className="text-2xl mb-3 font-semibold">Versículo do dia</h2>
        </header>
        )
      }


      <main>
        <p className="text-lg">{content}</p>
      </main>

      <footer className="flex justify-between mt-2">
        <button onClick={onShare} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none">Compartilhar</button>
        
        {index && (<a href="#" className="text-base text-blue-600 hover:underline">{index}</a>)}
      </footer>

    </article>
  );
}
