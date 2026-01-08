import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[data-sa-link-event]');
    if (!link) return;

    const href = link.getAttribute('href');
    const eventName = link.getAttribute('data-sa-link-event');

    if (!href || !window.sa_event || !window.sa_loaded) return;

    if (link.target === '_blank') {
      event.preventDefault();
      window.sa_event(eventName, () => {
        window.location.href = href;
      });
    } else {
      window.sa_event(eventName);
    }
  });
}
