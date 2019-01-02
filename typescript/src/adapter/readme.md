# Adapterパターン

APIの変換時に使用するパターン。

かつて作ったクラスを別のサービスなどで使う場合に必要となる。  
この例では、昔作った汚いメール送信クラス（別に汚くなくてもいいけど）を新しいサービスに組み込むことを想定した。  
新しいサービスでは、Slackなどの通知もあり、Notificationインターフェースを実装している。  
メールでの通知に関しては、既存の処理があり、時間もなかったため、MailNotificationをアダプターとして  
OldDartyEmailNotificationをラップして使っている。

一旦アダプターパターンで実装して、後からOldDartyEmailNotificationをリファクタリングしても  
使う側に変更はないところもメリット。  
また、MailNotificationに対して適切なテストがされていれば、OldDartyEmailNotificationをリファクタリングしやすい。

基本的には１対１対応なのかな？
複数の処理を束ねる場合はFacadeとかになるのかもしれない。