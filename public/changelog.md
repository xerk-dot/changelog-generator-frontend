

        
# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project does adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2025-02-21
This version introduces several bug fixes and improvements, including support for FP8 Accum and updates to profiler truncation.
### Fixed
- Fixed Row/Col broadcast with array arguments to prevent invalid comparison
([View Commit](https://github.com/NVIDIA/cutlass/commit/eefa171318b79cbe2e78514d4cce5cd0fe919d0c))
### Changed
- Truncated names for cutlass profiler in GemmKind
([View Commit](https://github.com/NVIDIA/cutlass/commit/afa1772203677c5118fcd82537a9c8fefbcc7008))
### Added
- Added support for Hopper Grouped GEMM with FP8 Accum
([View Commit](https://github.com/NVIDIA/cutlass/commit/9b3772dfa64da305612a0e4cafc51bd1bcb3f74d))

## 2025-02-20
This update modified version 3.8, signaling a possible preparatory change for future enhancements or fixes.
### Changed
- Updated version 3.8 consistently across relevant files
([View Commit](https://github.com/NVIDIA/cutlass/commit/b84e9802d84b16bcb4e92338fcf0a04785df9236))

## 2025-02-11
A critical issue with CUDA version checking during compile time is addressed, ensuring more reliable execution across different driver versions.
### Fixed
- Ensured consistent usage of cudaGetDriverEntryPoint across versions for CUDA 12
([View Commit](https://github.com/NVIDIA/cutlass/commit/e9627ce55b42fd2599f58cd4396da9380954def0))

## 2025-02-10
This release focuses on documentation enhancements and the inclusion of new research publications.
### Added
- Added ParetoQ publication to PUBLICATIONS.md referencing low-bit quantization research
([View Commit](https://github.com/NVIDIA/cutlass/commit/ad6e1ec19c520a0fa12b3519828ddea29b8040c1))
### Fixed
- Corrected a minor typo in 0x_gemm_tutorial.md documentation
([View Commit](https://github.com/NVIDIA/cutlass/commit/0642d46dd48a5fc644eba29ecc4d10798967a395))

## 2025-02-07
This release marks the preparation for version 3.8.0 with potential improvements and fixes integrated.
### Changed
- General updates towards version 3.8.0, including name correction for contributors
([View Commit](https://github.com/NVIDIA/cutlass/commit/833f6990e031b48b4cd2fcf55e0849c51ef6bac2))

## 2025-02-02
Enhancements for EVT programming model with added support for row/col broadcast for pointer arrays are a highlight of this version.
### Added
- Added support for Row/Col broadcast with pointer arrays in EVT programming model
([View Commit](https://github.com/NVIDIA/cutlass/commit/affd1b693dfc121c51118cbc8583dfd308227ca6))

## 2025-02-01
Bug fixes for top-k softmax operations in CUDA code enhance the robustness of computations and ensure optimal functionality.
### Fixed
- Fixed bugs in generic-k code within top-k and softmax operations
([View Commit](https://github.com/NVIDIA/cutlass/commit/6f552781215f542f36dde611b8bf3922c02a214a))
        