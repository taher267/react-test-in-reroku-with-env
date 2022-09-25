export default function NewTest() {
  return (
    <div>
      <p>{process.env.REACT_APP_ENV_LOCAL || 'nothing'}</p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi
      iste, minus adipisci illo nulla soluta. Labore, voluptate architecto?
      Deleniti tempore veritatis vitae autem voluptatem eos totam mollitia
      delectus hic?
    </div>
  );
}
