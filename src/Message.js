export default function Message(props) {
  return (
    <div>
      <p>
        You had read <strong>{props.count}</strong> advice.
      </p>
    </div>
  );
}
