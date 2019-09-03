%Fuzzy Set Opreation
clear all;
clc

A = input('Enter the first matrix : ');
B = input('Enter the Second matrix : ');

[m n]=size(A);
A_Complement=ones(m)-A;

[m n]=size(B);
B_Complement=ones(m)-B;

% A Interection B_Complemnt
A_Intersection_B_Complement = min(A,B_Complement);
% B Intersection A_Complement
B_Intersection_A_Complement = min(B,A_Complement);

disp('A Interection B_Complement :');
disp(A_Intersection_B_Complement);
disp('B Interection A_Complement :');
disp(B_Intersection_A_Complement);

