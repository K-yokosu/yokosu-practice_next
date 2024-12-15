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
export const PATH_CRUD_FETCH_DETAIL: Path = `${PATH_CRUD}/fetch/%s`;
export const PATH_CRUD_FETCH_EDIT: Path = `${PATH_CRUD}/fetch/%s/edit`;
export const PATH_CRUD_SSR: Path = `${PATH_CRUD}/ssr`;
export const PATH_CRUD_SSG: Path = `${PATH_CRUD}/ssg`;
export const PATH_CRUD_ISR: Path = `${PATH_CRUD}/isr`;

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
export const PATH_SHADCN_RESIZABLE: Path = `${PATH_SHADCN}/resizable`;
export const PATH_SHADCN_PROGRESS: Path = `${PATH_SHADCN}/progress`;
export const PATH_SHADCN_POPOVER: Path = `${PATH_SHADCN}/popover`;
export const PATH_SHADCN_PAGINATION: Path = `${PATH_SHADCN}/pagination`;
export const PATH_SHADCN_LABEL: Path = `${PATH_SHADCN}/label`;
export const PATH_SHADCN_INPUT: Path = `${PATH_SHADCN}/input`;
export const PATH_SHADCN_INPUT_OTP: Path = `${PATH_SHADCN}/input_otp`;
export const PATH_SHADCN_RADIO: Path = `${PATH_SHADCN}/radio`;
export const PATH_SHADCN_ALERT: Path = `${PATH_SHADCN}/alert`;
export const PATH_SHADCN_ALERT_DIALOG: Path = `${PATH_SHADCN}/alert_dialog`;
export const PATH_SHADCN_ASPECT: Path = `${PATH_SHADCN}/aspect`;
export const PATH_SHADCN_AVATAR: Path = `${PATH_SHADCN}/avatar`;
export const PATH_SHADCN_BADGE: Path = `${PATH_SHADCN}/badge`;
export const PATH_SHADCN_BREADCRUMB: Path = `${PATH_SHADCN}/breadcrumb`;
export const PATH_SHADCN_BUTTON: Path = `${PATH_SHADCN}/button`;
export const PATH_SHADCN_CALENDAR: Path = `${PATH_SHADCN}/calendar`;
export const PATH_SHADCN_CARD: Path = `${PATH_SHADCN}/card`;
export const PATH_SHADCN_CHART: Path = `${PATH_SHADCN}/chart`;
export const PATH_SHADCN_MENUBAR: Path = `${PATH_SHADCN}/menubar`;
export const PATH_SHADCN_HOVERCARD: Path = `${PATH_SHADCN}/hover_card`;
export const PATH_SHADCN_DROPDOWN_MENU: Path = `${PATH_SHADCN}/dropdown_menu`;
export const PATH_SHADCN_DRAWER: Path = `${PATH_SHADCN}/drawer`;
export const PATH_SHADCN_DIALOG: Path = `${PATH_SHADCN}/dialog`;
export const PATH_SHADCN_DATA_TABLE: Path = `${PATH_SHADCN}/data_table`;
export const PATH_SHADCN_CONTEXT_MENU: Path = `${PATH_SHADCN}/context_menu`;
export const PATH_SHADCN_COMMAND: Path = `${PATH_SHADCN}/command`;
export const PATH_SHADCN_COLLAPSIBLE: Path = `${PATH_SHADCN}/collapsible`;
export const PATH_SHADCN_CAROUSEL: Path = `${PATH_SHADCN}/carousel`;

export const PATH_OTHER: Path = `${PATH_ROOT}other`;
export const PATH_OTHER_PARALLEL: Path = `${PATH_OTHER}/parallel_route/sample`;
export const PATH_OTHER_NO_PARALLEL: Path = `${PATH_OTHER}/parallel_route/no_parallel`;
export const PATH_OTHER_INTERCEPT: Path = `${PATH_OTHER}/intercept_route/sample`;
export const PATH_OTHER_NO_INTERCEPT: Path = `${PATH_OTHER}/intercept_route/no_intercept`;

// --------- sample パス一覧 ----------- //
export const PATH_SAMPLE: Path = "/sample";
export const PATH_SAMPLE_DND: Path = `${PATH_SAMPLE}/dnd`;
export const PATH_SAMPLE_FORM: Path = `${PATH_SAMPLE}/hook_form`;
export const PATH_SAMPLE_ROUTECACHE: Path = `${PATH_SAMPLE}/route_cache`;
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
