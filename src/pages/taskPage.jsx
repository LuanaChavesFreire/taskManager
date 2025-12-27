import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen justify-center flex">
      <div className="w-125 space-y-4">
        <div className="flex justify-center relative my-6">
          <button
            className="absolute left-0 top-0 bottom-0"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft />{" "}
          </button>

          <h1 className="font-bold ">Detalhes da Tarefa</h1>
        </div>
        <div className="bg-c4 text-c1 p-4 rounded-md">
          <h2 className="text-xl text-c5 font-bold">{title} </h2>
          <p className="text-c5">{description} </p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
