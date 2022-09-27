
document.addEventListener("DOMContentLoaded", () => {
  lazyload();
});

function lazyload() {
  const currentIframes = [];
  const iframes = document.getElementsByTagName("iframe");

  for (let i = 0; i < iframes.length; i++) {
    const element = iframes[i];
    const findUni2Id = element.attributes["uni2id"];

    if (findUni2Id) {
      currentIframes.push(findUni2Id.value);
    }

  }


  if (currentIframes.find((x) => x === 'DZ65996')) {
    unomiTracker.personalize(
      {
        id: "testTemplate",
        strategy: "matching-first",
        strategyOptions: {
          fallback: "noMatchFound",
        },
        contents: [{
          "id": "6303f247cb135e00e387dd72,Editorial,6324ee31d9de9df89a793c80,62ed54e9382a43e1a39b3d5e,0,62fbb2900ff11b38d35eb4bf",
          "filters": [{
            "condition": {
              "type": "booleanCondition", "parameterValues": {
                "operator": "and",
                "subConditions": [{
                  "type": "sessionPropertyCondition",
                  "parameterValues": { "propertyName": "gender", "propertyValue": "male", "comparisonOperator": "equals" }
                },
                {
                  "type": "booleanCondition", "parameterValues": {
                    "operator": "or", "subConditions":
                      [{ "type": "booleanCondition", "parameterValues": { "operator": "or", "subConditions": [{ "type": "sessionPropertyCondition", "parameterValues": { "propertyName": "gender" } }] } }]
                  }
                }]
              }
            }
          }]
        },
        { "id": "6303f247cb135e00e387dd72,Editorial,6324ee31d9de9df89a793c80,62ed54e9382a43e1a39b3d5e,0,62fbb2900ff11b38d35eb4bf" }],
      },

      async function (res) {

        // if (res && res[0] !== "noMatchFound") {

        const bodyReq = {
          template: res[0],
          sessionId: cxs.sessionId,
          OpenGraph: getMetadataGraph(),
          JSONLD: getMetadataJSON(),
        };

        const response = await fetch("http://localhost:3000/uni2Api/personalization/renderization", {
          method: "POST",

          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          body: JSON.stringify(bodyReq),
        });

        response.json().then((data) => {

          var iframe = document.getElementById('DZ65996');
          var doc;

          if (iframe.contentDocument) {
            doc = iframe.contentDocument;
          } else {
            doc = iframe.contentWindow.document;
          }

          doc.body.innerHTML = data.template;
        });

        // }
      }
    );
  }
  if (currentIframes.find((x) => x === 'YX55053')) {
    unomiTracker.personalize(
      {
        id: "testTemplate",
        strategy: "matching-first",
        strategyOptions: {
          fallback: "noMatchFound",
        },
        contents: [
          {
            "id": "6317f33f23a972d58223c47e,Editorial,6324ee31d9de9df89a793c80,62fc0c5a5a04b091b8abe51c,0,62e2b6a96c308e40f037f8b2",
            "filters": [{
              "condition": {
                "type": "booleanCondition",
                "parameterValues": {
                  "operator": "and",
                  "subConditions":
                    [{ "type": "sessionPropertyCondition", "parameterValues": { "propertyName": "gender", "propertyValue": "male", "comparisonOperator": "equals" } },
                    {
                      "type": "booleanCondition", "parameterValues": {
                        "operator": "or", "subConditions":
                          [{
                            "type": "booleanCondition", "parameterValues": {
                              "operator": "or", "subConditions":
                                [{ "type": "sessionPropertyCondition", "parameterValues": { "propertyName": "gender" } }]
                            }
                          }]
                      }
                    }]
                }
              }
            }]
          },
          { id: "6317f33f23a972d58223c47e,Editorial,6324ee31d9de9df89a793c80,62fc0c5a5a04b091b8abe51c,0,62e2b6a96c308e40f037f8b2" }],
      },

      async function (res) {

        if (res && res[0] !== "noMatchFound") {

          const bodyReq = {
            template: res[0],
            sessionId: cxs.sessionId,
            OpenGraph: getMetadataGraph(),
            JSONLD: getMetadataJSON(),
          };

          const response = await fetch("http://localhost:3000/uni2Api/personalization/renderization", {
            method: "POST",

            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },

            body: JSON.stringify(bodyReq),
          });

          response.json().then((data) => {

            var iframe = document.getElementById('YX55053');
            var doc;

            if (iframe.contentDocument) {
              doc = iframe.contentDocument;
            } else {
              doc = iframe.contentWindow.document;
            }

            doc.body.innerHTML = data.template;
          });

        }
      }
    );
  }
}

function getMetadataGraph() {


  const AltImagen = document
    .querySelector(
      'meta[property="og:AltImagen"]'
    ) ? document
      .querySelector(
        'meta[property="og:AltImagen"]'
      ).getAttribute('content') : ""
  const metaDescription = document
    .querySelector(
      'meta[property="og:metaDescription"]'
    ) ? document
      .querySelector(
        'meta[property="og:metaDescription"]'
      ).getAttribute('content') : ""
  const summary = document
    .querySelector(
      'meta[property="og:summary"]'
    ) ? document
      .querySelector(
        'meta[property="og:summary"]'
      ).getAttribute('content') : ""
  const tituloArticulo = document
    .querySelector(
      'meta[property="og:tituloArticulo"]'
    ) ? document
      .querySelector(
        'meta[property="og:tituloArticulo"]'
      ).getAttribute('content') : ""
  const topic = document
    .querySelector(
      'meta[property="og:topic"]'
    ) ? document
      .querySelector(
        'meta[property="og:topic"]'
      ).getAttribute('content') : ""
  const url = document
    .querySelector(
      'meta[property="og:url"]'
    ) ? document
      .querySelector(
        'meta[property="og:url"]'
      ).getAttribute('content') : ""
  return { AltImagen, metaDescription, summary, tituloArticulo, topic, url, }
}


function getMetadataJSON() {
  var jsonLd = document.querySelector('script[type="application/ld+json"]');
  return JSON.parse(jsonLd.innerHTML);
}

