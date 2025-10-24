import { CheckCircle, CreditCard, Package } from "lucide-react";
export const ProgressSteps = ({ step }: { step: number }) => {
  return (
    <div className="bg-nest-primary pb-8 pt-6">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-5 items-center justify-center gap-4 text-white">
          <div className="flex flex-col items-center space-y-2">
            <div
              className={`relative flex h-12 w-12 items-center justify-center rounded-full bg-white`}
            >
              <Package className={`h-6 w-6 text-nest-primary`} />
              {step > 1 && (
                <CheckCircle className="absolute -bottom-0 -right-1 h-4 w-4 text-nest-primary bg-white rounded-full" />
              )}
            </div>
            <div className="text-center text-sm">
              <p>Phương thức</p>
              <p>thanh toán</p>
            </div>
          </div>
          <div className="h-0.5 w-full  border-t-[2px] border-dashed border-white/50"></div>
          <div className="flex flex-col items-center space-y-2">
            <div
              className={`relative flex h-12 w-12 items-center justify-center rounded-full ${
                step > 1 ? "bg-white" : "bg-white/20"
              } `}
            >
              <CreditCard
                className={`h-6 w-6 ${
                  step > 1 ? "text-nest-primary" : "text-white"
                } `}
              />
              {step > 2 && (
                <CheckCircle className="absolute -bottom-0 -right-1 h-4 w-4 text-nest-primary bg-white rounded-full" />
              )}
            </div>
            <div className="text-center text-sm">
              <p>Tiến hành</p>
              <p>thanh toán</p>
            </div>
          </div>
          <div className="h-0.5 w-full  border-t-[2px] border-dashed border-white/50"></div>
          <div className="flex flex-col items-center space-y-2">
            <div
              className={`relative flex h-12 w-12 items-center justify-center rounded-full ${
                step > 2 ? "bg-white" : "bg-white/20"
              } `}
            >
              <CheckCircle
                className={`h-6 w-6 ${
                  step > 2 ? "text-nest-primary" : "text-white"
                }`}
              />
              {step > 3 && (
                <CheckCircle className="absolute -bottom-0 -right-1 h-4 w-4 text-nest-primary bg-white rounded-full" />
              )}
            </div>
            <div className="text-center text-sm">
              <p>Thanh toán</p>
              <p>thành công</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
