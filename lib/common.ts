import { ChangeEvent } from "react";

export const changeInputHandler = <T>(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>, name: keyof T, values: T, setValues: React.Dispatch<React.SetStateAction<T>>) => {
  let target = e.target;
  if (target) {
    let value = target.value;
    setValues({ ...values, [name]: value });
  }
};

/**
 * 任意のオブジェクト配列で指定されたkeyを別のkeyに変換する関数
 * @param array - 変換対象のオブジェクト配列
 * @param fromKey - 変換元のkey名
 * @param toKey - 変換先のkey名
 * @returns 変換されたオブジェクト配列
 */
export function convertKey<T extends object>(array: T[], fromKey: keyof T, toKey: string): any[] {
  return array.map(item => {
    const { [fromKey]: value, ...rest } = item;
    return { ...rest, [toKey]: value };
  });
}
