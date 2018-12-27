# Adapterパターン

かつて作ったクラスを別のサービスなどで使う場合に必要となる。  
この例では、昔作った汚いメール送信クラスを新しいサービスに組み込むことを想定した。  
新しいサービスでは、Slackなどの通知もあり、共通のNotificationインターフェースを実装している。  
メールでの通知に関しては、既存の処理があったため、MailNotificationをアダプターとして  
OldDartyEmailNotificationをラップしている。

一旦アダプターパターンで実装して、後からOldDartyEmailNotificationをリファクタリングしても  
使う側に変更はないところもメリット。