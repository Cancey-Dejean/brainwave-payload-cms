import { SimpleImage } from "@/types";
import Image from "next/image";

type NotificationProps = {
  className?: string;
  title: string;
  notificationImages: SimpleImage[];
};

// export const notificationImages = [notification4, notification3, notification2];

const Notification = ({
  className,
  title,
  notificationImages,
}: NotificationProps) => {
  return (
    <div
      className={`${
        className || ""
      } bg-brand-300/40 flex items-center gap-5 rounded-2xl border border-white/10 p-4 pr-6 backdrop-blur`}
    >
      <Image
        src="/images/notification/image-1.png"
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />

      <div className="flex-1">
        <h6 className="mb-1 text-base font-semibold">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="-m-0.5 flex">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="border-n-12 flex h-6 w-6 overflow-hidden rounded-full border-2"
              >
                <Image
                  src={item.url}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={item.alt || "Notification Image"}
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
