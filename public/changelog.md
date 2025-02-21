
# Changelog

## [Unreleased]
Here is a summary of the changes described in the commit messages:

1. Enhanced support for GEMM operations, including mixed data types, parallel split-k, and various optimizations for performance improvements.
2. Added new epilogues, including activation functions like leaky ReLU, sigmoid, tanh, GELU, Hardswish, and SiLU, with optimized implementations for half-precision and vectorized operations.
3. Extended and improved support for several CUDA architectures, including Ampere and Volta Tensor Cores, with specific adjustments for computation at different bit levels.
4. Included bug fixes and optimizations for different operations across CUDA architectures, focusing on reducing memory access issues, improving epilogues and tile schedulers, and fixing typos.
5. Regular updates to documentation, improved Python interfaces, and better alignment with new CUDA Toolkit versions.
6. Added new data conversion utilities and support for different communication layouts, particularly in group GEMM and broadcast operations.
7. Introduced test cases, fixes, and optimizations for specific cases, such as strided DGRAD, grouped GEMM, sparse GEMM, and other operations, providing better coverage and performance enhancements.
8. Added more publications and consolidated changelogs and documentation updates for better tracking of changes and bug fixes. // Updated to include commit messages
        