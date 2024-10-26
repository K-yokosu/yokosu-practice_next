import { sprintf } from "sprintf-js";

export type Path = string;

// パスの書式可変部分は%sで表現する
// 例: /api/clinic/101 -> /api/clinic/%s
// パス文字列はmakePath関数で生成する(constそのままで使えるけど一応makePathを使う!!)

// --------- public パス一覧 ----------- //
export const PATH_ROOT: Path = "/";
export const PATH_DASHBOARD: Path = `${PATH_ROOT}dashboard`;
export const PATH_LOGIN: Path = `${PATH_ROOT}login`;
export const PATH_ABOUT: Path = `${PATH_ROOT}about`;
export const PATH_CONTACT: Path = `${PATH_ROOT}contact`;

// ------------------------ ▼ auth ▼ ------------------------ //
export const PATH_SEGMENT: Path = `${PATH_ROOT}segment`;
export const PATH_SEGMENT_LOAD: Path = `${PATH_SEGMENT}/loading`;
export const PATH_SEGMENT_NOTFOUND: Path = `${PATH_SEGMENT}/not-found`;
export const PATH_SEGMENT_ROUTE: Path = `${PATH_SEGMENT}/route`;
export const PATH_CRUD: Path = `${PATH_ROOT}crud`;
export const PATH_CRUD_FETCH: Path = `${PATH_CRUD}/fetch`;
export const PATH_SHADCN: Path = `${PATH_ROOT}shadcn`;
export const PATH_SHADCN_ACCORDION: Path = `${PATH_SHADCN}/accordion`;
export const PATH_SHADCN_TOGGLE: Path = `${PATH_SHADCN}/toggle`;
export const PATH_SHADCN_TOOTLIP: Path = `${PATH_SHADCN}/tooltip`;
export const PATH_SHADCN_SWITCH: Path = `${PATH_SHADCN}/switch`;
export const PATH_SHADCN_TABLE: Path = `${PATH_SHADCN}/table`;
export const PATH_SHADCN_SHEET: Path = `${PATH_SHADCN}/sheet`;
export const PATH_SHADCN_TOAST: Path = `${PATH_SHADCN}/toast`;
export const PATH_SHADCN_SLIDER: Path = `${PATH_SHADCN}/slider`;
export const PATH_SHADCN_SCROLL: Path = `${PATH_SHADCN}/scroll`;
export const PATH_SHADCN_NAVI: Path = `${PATH_SHADCN}/navi`;
export const PATH_SHADCN_SONNER: Path = `${PATH_SHADCN}/sonner`;
export const PATH_SHADCN_TABS: Path = `${PATH_SHADCN}/tabs`;
export const PATH_SHADCN_SKELTON: Path = `${PATH_SHADCN}/skelton`;
export const PATH_SHADCN_SEPARATOR: Path = `${PATH_SHADCN}/separator`;
export const PATH_SHADCN_SELECT: Path = `${PATH_SHADCN}/select`;
export const PATH_OTHER: Path = `${PATH_ROOT}other`;
export const PATH_OTHER_PARALLEL: Path = `${PATH_OTHER}/parallel_route/sample`;
export const PATH_OTHER_NO_PARALLEL: Path = `${PATH_OTHER}/parallel_route/no_parallel`;
export const PATH_OTHER_INTERCEPT: Path = `${PATH_OTHER}/intercept_route/sample`;
export const PATH_OTHER_NO_INTERCEPT: Path = `${PATH_OTHER}/intercept_route/no_intercept`;

// --------- sample パス一覧 ----------- //
export const PATH_SAMPLE: Path = "/sample";
export const PATH_SAMPLE_DND: Path = `${PATH_SAMPLE}/dnd`;
export const PATH_SAMPLE_FORM: Path = `${PATH_SAMPLE}/hook_form`;
// export const PATH_SAMPLE_CREATE2: Path = `${PATH_SAMPLE}/create_second`;
// export const PATH_SAMPLE_EDIT: Path = `${PATH_SAMPLE}/%s/edit`;
// export const PATH_SAMPLE_DETAIL: Path = `${PATH_SAMPLE}/%s`;

// --------- API パス一覧 ----------- //
export const PATH_API_CSRF_TOKEN: Path = "/sanctum/csrf-cookie";
/** ログイン (/api/login) */
export const PATH_API_LOGIN: Path = "/api/login";
/** ログイン (/api/logout) */
export const PATH_API_LOGOUT: Path = "/api/logout";

export const PATH_API_SAMPLE: Path = "/api/sample";

/** ファイルアイテム（/api/file_item) */
export const PATH_API_FILE_ITEM_CREATE: Path = "/api/file_item";
export const PATH_API_FILE_ITEM_UPDATE: Path = "/api/file_item/%s";
export const PATH_API_FILE_ITEM_DELETE: Path = "/api/file_item/%s";


// --------- パス生成関数 ----------- //
// パスパラメータに埋め込む文字列数値は%sの順にargs配列で設定する
// 例: /api/clinic/%s/%s -> args = [101, 202] -> /api/clinic/101/202
// クエリ文字列はqueryArgsで設定するURLSearchParamsに渡せる値を設定する
// 例: /api/clinic/%s -> args=[101] queryArgs = {name: "hoge"} -> /api/clinic/101?name=hoge
// ※暗号化必要になれば暗号化のオプションか別途makeEncryptedPathを作る

type QueryArgs = Record<string, string>;
export const makePath = (path: Path, args: (string | number)[] = [], queryArgs: QueryArgs | undefined = undefined, hash: string | undefined = undefined): string => {
  const stringArgs = args.map(arg => (typeof arg === "number" ? arg.toString() : arg));
  const s = sprintf(path, ...stringArgs);

  if (typeof queryArgs === "undefined" && typeof hash === "undefined") {
    return s;
  }

  if (typeof queryArgs === "undefined" && typeof hash !== "undefined") {
    return `${s}#${hash}`;
  }

  const params = new URLSearchParams(queryArgs);

  if (typeof hash === "undefined") {
    return `${s}?${params.toString()}`;
  }

  return `${s}?${params.toString()}#${hash}`;
};
