/**
 * Return a classname from list of classes
 */
export default function classes(listOfClasses: (string | null | undefined)[]) {
    return listOfClasses.filter(Boolean).join(' ')
}