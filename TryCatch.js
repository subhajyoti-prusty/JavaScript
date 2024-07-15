try {
    console.log('Start of try block');
    console.log(a);
    console.log('End of try block');
} catch (error) {
    console.log('Error message:', error.message);
} finally {
    console.log('Finally block');
}