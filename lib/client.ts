import { createClient } from 'microcms-js-sdk';
// - `microcms-js-sdk` パッケージから `createClient` 関数を読み込む
// - これは SDK が提供する「microCMSと通信するための便利関数」

export const client = createClient({
    // 環境変数（API設定）を取得、未定義だった場合は ''（空文字）を代わりに使う
    // serviceDomain は https://◯◯◯.microcms.io の ◯◯◯ 部分
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || '',

  // microCMS の管理画面から取得した秘密鍵
  apiKey: process.env.MICROCMS_API_KEY || '',
});