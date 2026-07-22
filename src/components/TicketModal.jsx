import { useEffect } from "react";
import { createPortal } from "react-dom";

const TicketModal = ({
  isOpen,
  onClose,
  ticket,
  statusColor = "bg-gray-400",
}) => {
  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !ticket) {
    return null;
  }

  const jiraUrl = `https://jira.globaldevtools.bbva.com/browse/${ticket.id}`;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ticket-modal-title"
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-black/70 p-4
        backdrop-blur-sm
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="
          relative max-h-[85vh] w-full max-w-2xl
          overflow-y-auto rounded-2xl
          border border-gray-600
          bg-gray-900 text-gray-100
          shadow-2xl
        "
      >
        <header
          className="
            sticky top-0 z-10
            flex items-start justify-between gap-5
            border-b border-gray-700
            bg-gray-900 px-6 py-5
          "
        >
          <div className="min-w-0">
            <a
              href={jiraUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-bold text-sky-400
                transition-colors hover:text-sky-300
                hover:underline
              "
            >
              {ticket.id}
            </a>

            <h2
              id="ticket-modal-title"
              className="mt-2 text-2xl font-bold leading-tight"
            >
              {ticket.title || "Sin título"}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar modal"
            className="
              flex h-10 w-10 shrink-0 cursor-pointer
              items-center justify-center rounded-full
              bg-gray-800 text-2xl text-gray-300
              transition-colors
              hover:bg-gray-700 hover:text-white
              focus:outline-none focus:ring-2
              focus:ring-blue-400
            "
          >
            ×
          </button>
        </header>

        <main className="space-y-6 px-6 py-5">
          <section>
            <h3
              className="
                mb-2 text-sm font-bold
                uppercase tracking-wide text-gray-400
              "
            >
              Descripción
            </h3>

            <p
              className="
                whitespace-pre-wrap break-words
                text-lg leading-7
              "
            >
              {ticket.description || "Sin descripción"}
            </p>
          </section>

          <section className="grid gap-5 sm:grid-cols-2">
            <div>
              <h3
                className="
                  mb-2 text-sm font-bold
                  uppercase tracking-wide text-gray-400
                "
              >
                Asignado a
              </h3>

              <p className="break-words font-semibold text-sky-400">
                {ticket.asigneeName || "Sin asignar"}
              </p>
            </div>

            <div>
              <h3
                className="
                  mb-2 text-sm font-bold
                  uppercase tracking-wide text-gray-400
                "
              >
                Estado
              </h3>

              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={`
                    h-3.5 w-3.5 shrink-0 rounded-full
                    border border-white/40 shadow-sm
                    ${statusColor}
                  `}
                />

                <p className="font-semibold">
                  {ticket.status || "Sin estado"}
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer
          className="
            sticky bottom-0
            flex flex-col-reverse gap-3
            border-t border-gray-700
            bg-gray-900 px-6 py-4
            sm:flex-row sm:justify-end
          "
        >
          <button
            type="button"
            onClick={onClose}
            className="
              cursor-pointer rounded-lg
              bg-gray-700 px-5 py-2
              font-semibold text-white
              transition-colors
              hover:bg-gray-600
              focus:outline-none focus:ring-2
              focus:ring-gray-400
            "
          >
            Cerrar
          </button>

          <a
            href={jiraUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-lg bg-blue-600
              px-5 py-2 text-center
              font-semibold text-white
              transition-colors
              hover:bg-blue-700
              focus:outline-none focus:ring-2
              focus:ring-blue-400
            "
          >
            Abrir en Jira
          </a>
        </footer>
      </section>
    </div>,
    document.body,
  );
};

export default TicketModal;
