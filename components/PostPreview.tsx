import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";
import moment from "moment";

const PostPreview = (props: PostMetadata) => {
  function getMomentString(postTime: string): string {
    let postMoment = moment(postTime);
    if (postMoment.isAfter(moment().subtract(1, "day"))) {
      return postMoment.fromNow();
    } else {
      return postMoment.format("ll");
    }
  }

  return (
    <div className="p-4  transition duration-200 transform hover:translate-y-2 ">
      <div className="hover:opacity-80">
        <Link href={`${props?.link}`} target="_blank">
          {props?.image_url && (
            <Image src={props?.image_url} alt="" width="800" height="400" />
          )}

          <h4 className="font-bold text-lg pt-2 tracking-wide">
            {props?.title}
          </h4>
        </Link>
      </div>
      <div className="flex">
        <p className="text-sm pt-3 tracking-wider font-medium pr-1">By</p>
        <p className="text-sm pt-3 text-[#e53170] tracking-wider font-semibold">
          {props?.source_name}
        </p>
        <span className="flex-auto"></span>
        <p className="text-sm pt-3 tracking-wider font-medium pr-1">
          {getMomentString(props?.pubDate)}
        </p>
      </div>
      <p className="text-sm pt-3 text-gray-600 tracking-wider">
        {props?.description}
      </p>
    </div>
  );
};

export default PostPreview;
