# Migration `20200501170357-create-dashboards`

This migration has been generated by Phuoc Do at 5/1/2020, 5:03:57 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."Dashboard" (
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    "id" TEXT NOT NULL  ,
    "json" TEXT NOT NULL  ,
    "name" TEXT NOT NULL  ,
    "updatedAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    PRIMARY KEY ("id")
) 

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200501170357-create-dashboards
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,17 @@
+datasource DS {
+  provider = "sqlite"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = env("BINARY_TARGET")
+}
+
+model Dashboard {
+  id          String  @id @default(cuid())
+  name        String
+  json        String
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @default(now())
+}
```


