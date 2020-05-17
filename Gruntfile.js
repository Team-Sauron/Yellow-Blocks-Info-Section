
module.exports = (grunt) => {
  grunt.registerTask('speak', () => {
    console.log('im speaking');
  });
  grunt.registerTask('yell', () => {
    console.log('im yelling');
  });

  grunt.registerTask('both', ['speak', 'yell']);
};
