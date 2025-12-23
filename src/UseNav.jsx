import { useNavigate } from "react-router";

function SomeComponent() {
  let navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}>Go Back</button>
  );
}

export default SomeComponent