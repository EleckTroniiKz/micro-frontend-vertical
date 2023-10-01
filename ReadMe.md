Um die Anwendung auszuführen

1. Ein Terminal in jedem Subprojekt öffnen (home, server, userDetailEdit)
2. In jedem Terminal npm install ausführen
3. In den Terminals home, userDetailEdit den Befehl ausführen: yarn && yarn start
4. im Server Projekt diesen Befehl ausführen: yarn && yarn start dev

Um die Unit-Tests in den Projekten Home und UserDetailEdit auszuführen

1. Navigiere in das gewünschte Projekt
2. öffne Terminal
3. yarn jest

Um die e2e Tests auszuführen

1. Starte alle Projekte
2. Öffne neue Terminal für den home Ordner
3. yarn run cypress open
4. Browser auswählen
5. Dort zu der Spec Datei navigieren und diesen ausführen
