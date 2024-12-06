/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className=" tw-h-[60rem] md:tw-h-[80rem] tw-flex tw-items-center tw-justify-center tw-relative tw-p-2 md:tw-p-20"
      ref={containerRef}
    >
      <div
        className=" tw-w-full tw-relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="tw-div tw-max-w-5xl tw-mx-auto tw-text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="tw-max-w-5xl tw--mt-12 tw-mx-auto tw-h-[30rem] md:tw-h-[40rem] tw-w-full tw-border-4 tw-border-[#6C6C6C] tw-p-2 md:tw-p-6 tw-bg-[#222222] tw-rounded-[30px] tw-shadow-2xl"
    >
      <div className="tw-rounded-[27px] tw-h-full tw-w-full tw-overflow-hidden tw-bg-gray-100 md:tw-rounded-2xl md:tw-p-4">
        {children}
      </div>
    </motion.div>
  );
};

export function Dashboard() {
  return (
    <div className="tw-flex tw-flex-col tw-overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="tw-text-4xl tw-font-semibold tw-text-black">
              تمكين إدارة النقل الخاصة بك <br />
              <span className="tw-text-4xl md:tw-text-[6rem] tw-font-bold tw-mt-1 tw-leading-none">
                لوحة تحكم مبسطة
              </span>
            </h1>
          </>
        }
      >
        <img
          src="/images/image.png"
          alt="dashboard"
          height={720}
          width={1400}
          className="tw-mx-auto tw-rounded-2xl tw-object-cover tw-h-full tw-object-left-top"
        />
      </ContainerScroll>
    </div>
  );
}
