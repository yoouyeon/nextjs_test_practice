function TodoPage(props: { id: any }) {
  // 쿼리에서 자기 이름 알아와야 함
  const { id } = props;
  console.log(id);
  return (
    <div>
      <h1>jeyoon 의 할 일</h1>
      {/* TODO Continaer */}
      <button>✏️</button>
    </div>
  );
}

export async function getServerSideProps(context: { query: { id: any } }) {
  const { id } = context.query;
  return {
    props: { id: id }, // will be passed to the page component as props
  };
}

export default TodoPage;
