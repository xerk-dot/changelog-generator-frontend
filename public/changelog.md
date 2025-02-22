

        
# CHANGELOG

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project does adhere to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 2025-02-21
This version focuses on several updates and fixes, including enhancements to broadcasting mechanisms, a new feature for FP8 accumulation, and profiler adjustments.
### Fixed
- Fix Row/Col broadcast with array arguments to prevent invalid comparison by utilizing a constexpr block.
([View Commit](https://github.com/NVIDIA/cutlass/commit/eefa171318b79cbe2e78514d4cce5cd0fe919d0c))
### Changed
- Truncate names in the cutlass profiler to simplify naming conventions.
([View Commit](https://github.com/NVIDIA/cutlass/commit/afa1772203677c5118fcd82537a9c8fefbcc7008))
### Added
- Added Hopper Grouped GEMM support for FP8 Accumulation, including a profiler extension.
([View Commit](https://github.com/NVIDIA/cutlass/commit/9b3772dfa64da305612a0e4cafc51bd1bcb3f74d))

## 2025-02-20
This update is part of the ongoing efforts to enhance the current features of version 3.8, including updating core components.
### Changed
- Version update to 3.8 v2 indicating continued maintenance and improvement.
([View Commit](https://github.com/NVIDIA/cutlass/commit/b84e9802d84b16bcb4e92338fcf0a04785df9236))

## 2025-02-11
This release makes essential updates to CUDA functionality ensuring compatibility and performance.
### Fixed
- Modified code to utilize cudaGetDriverEntryPoint with CUDA 12 to resolve undefined symbol error.
([View Commit](https://github.com/NVIDIA/cutlass/commit/e9627ce55b42fd2599f58cd4396da9380954def0))

## 2025-02-10
This update adds a new publication to the documentation and corrects typographical errors in tutorial files.
### Added
- Added new publication 'ParetoQ: Scaling Laws in Extremely Low-bit LLM Quantization' to PUBLICATIONS.md.
([View Commit](https://github.com/NVIDIA/cutlass/commit/ad6e1ec19c520a0fa12b3519828ddea29b8040c1))
### Fixed
- Corrected a typographical error in the 0x_gemm_tutorial.md file.
([View Commit](https://github.com/NVIDIA/cutlass/commit/0642d46dd48a5fc644eba29ecc4d10798967a395))

## 2025-02-07
This marks the roll-out of the significant update to version 3.8.0 with corrections to contributors' credits.
### Changed
- Updated to version 3.8.0 with name corrections for contributors.
([View Commit](https://github.com/NVIDIA/cutlass/commit/833f6990e031b48b4cd2fcf55e0849c51ef6bac2))

## 2025-02-02
This update focuses on extending the EVT broadcasting functionalities, improving support for pointer arrays.
### Added
- Enhancements to EVT, adding support for broadcasting pointer arrays in row/column dimensions.
([View Commit](https://github.com/NVIDIA/cutlass/commit/affd1b693dfc121c51118cbc8583dfd308227ca6))

## 2025-02-01
This release addresses a crucial bug in top-k with softmax functionality, paving the way for better support across variable top-k choices.
### Fixed
- Bugfix for generic-k code in top-k with softmax, adding support for K values apart from the optimized defaults.
([View Commit](https://github.com/NVIDIA/cutlass/commit/6f552781215f542f36dde611b8bf3922c02a214a))
        