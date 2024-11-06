import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const hello = [
        { name: "北海道・東北", value: "1", code: "1", children: ["北海道", "青森県", "岩手県", "宮城県", "山形県", "福島県", "秋田県"] },
        { name: "関東", value: "2", code: "2", children: ["茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県"] },
        { name: "中部", value: "3", code: "3", children: ["新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県"] },
        { name: "近畿", value: "4", code: "4", children: ["三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県"] },
        { name: "中国・四国", value: "5", code: "5", children: ["鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県"] },
        { name: "九州", value: "6", code: "6", children: ["福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"] }
    ];
    return NextResponse.json({ hello });
}
