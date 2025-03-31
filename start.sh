#!/bin/bash

# تعيين المسار
export PATH=/home/runcloud/.nvm/versions/node/v18.19.0/bin:$PATH

# الانتقال إلى مجلد التطبيق
cd /home/runcloud/webapps/StreetFighter

# تثبيت التبعيات
npm install

# بناء التطبيق
npm run build

# بدء التشغيل
npm start
