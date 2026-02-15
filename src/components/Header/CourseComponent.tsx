import type { ExpData } from "@/types";
import { FaBook, FaCloudDownloadAlt } from "react-icons/fa";

type CoursesProps = {
  data: ExpData;
};

export default function CourseComponent({ data }: CoursesProps) {
  return (
    <div>
      {!data.download ? (
        <span className="pt-2 text-2xl font-bold flex items-center gap-4">
          <FaBook size={18} />
          <span className="text-xs font-bold ">
            {data.title}
          </span>
        </span>
      ) : (
        <span className="pt-2 text-2xl font-bold flex items-center gap-4">
          <FaCloudDownloadAlt size={18} />
          <a
            href={data.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold underline underline-offset-1 hover:cursor-pointer"
          >
            {data.title}
          </a>
        </span>
      )}
    </div>
  );
}
