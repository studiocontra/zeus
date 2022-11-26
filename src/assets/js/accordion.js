const openItem = (headline, content) => {
  headline.classList.add('active');
  content.classList.add('active');
  content.style.maxHeight = content.scrollHeight + "px";
}

const closeItem = (headline, content) => {
  headline.classList.remove('active');
  content.classList.remove('active');
  content.style.maxHeight = null;
}

const getSiblings = (mainWrapper) => {
  const result = [];
  let node = mainWrapper.parentNode.firstChild;

  while ( node ) {
    if ( node !== mainWrapper && node.nodeType === Node.ELEMENT_NODE )
      result.push( node );
    node = node.nextElementSibling || node.nextSibling;
  }

  return result;
}


export default function initAccordion(mainItem, firstOpen) {
  const accordionTrigger = document.querySelectorAll(mainItem);

  if (firstOpen) {
    const firstItem = document.querySelector(mainItem);

    firstItem.nextElementSibling.style.maxHeight = firstItem.nextElementSibling.scrollHeight + "px"
  }

  accordionTrigger.forEach(item => {
    item.onclick = function () {
      const content = this.nextElementSibling;

      // Get this siblings
      const siblings = getSiblings(this.parentNode);
      // End Get this siblings

      if (content.style.maxHeight) {
        // this is if the accordion is open
        closeItem(item, content)
      } else {
        // if the accordion is currently closed
        openItem(item, content);

        siblings.map(sibling => {
          // Close all open siblings
          const headline = sibling.querySelector(mainItem);
          const content = headline.nextElementSibling;

          closeItem(headline, content);
        })
      }
    };
  })
}