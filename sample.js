// 以下のコードはあくまでサンプルであり、何の意味もありません。

var db = /* なんか初期化処理 */ null;

db.init({password: xxxx}); /* パスワードは隠しておいた */
// データベースに何か値を突っ込む
db.save({id: 1, name: "ちさ"});
db.close();

