
import fs from 'fs';

const path = 'App.tsx';
try {
    let content = fs.readFileSync(path, 'utf8');

    // We look for the block starting with {SERVICES.map((service) => {
    // and having "const Icon =" inside it, which is unique to the ServicesView version.
    const startMarker = '{SERVICES.map((service) => {';
    const startIndex = content.indexOf(startMarker);

    if (startIndex === -1) {
        console.error('Start marker not found');
        process.exit(1);
    }

    // Find the end of this block. It ends with })}
    // We can look for the closing of the map.
    // The block contains many lines.
    // We can just look for the first })} after the start index?
    // No, there might be nested things?
    // The block ends with "          })}"
    // Let's rely on the structure we saw in view_file.

    const endMarker = '          })}';
    const endIndex = content.indexOf(endMarker, startIndex);

    if (endIndex === -1) {
        console.error('End marker not found');
        process.exit(1);
    }

    const replacement = `{SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={() => onPreview(service)}
            />
          ))}`;

    const before = content.substring(0, startIndex);
    const after = content.substring(endIndex + endMarker.length);
    const newContent = before + replacement + after;

    fs.writeFileSync(path, newContent, 'utf8');
    console.log('Replacement successful');

} catch (err) {
    console.error(err);
    process.exit(1);
}
