"use client";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  variant?: "default" | "success" | "warning" | "destructive" | null | undefined;
  description: string;
};

// 便宜上、ボタンにtoastを設定しているが実際はリクエスト結果などで使用するので、
// 基本はイベントではなくメソッド内で記載する

export const ToastComponent = ({ title, variant, description }: Props) => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: title,
          variant: variant,
          description: description
        });
      }}
    >
      {title} Toast
    </Button>
  );
};
