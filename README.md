# Boda Óscar & Sandra · Invitación digital (paquete Interactivo)

Página estática: `index.html` + `invitados.js` + `img/` + `boda oscar y sandra.mp3`. Sin build; se publica tal cual (p. ej. GitHub Pages).

- **Invitados:** la lista (nombre, cupos y acompañantes) está en `invitados.js`. Antes de abrir la tarjeta, cada invitado busca su nombre; la carta, la nota del evento y el mensaje de WhatsApp muestran su nombre y su cupo.
- Pendientes de confirmar con los novios están marcados con `BORRADOR` / `PENDIENTE`.
- Al editar `invitados.js`, sube el número de `?v=` en la etiqueta `<script src="invitados.js?v=...">` de `index.html` para que el navegador no use la lista anterior.
