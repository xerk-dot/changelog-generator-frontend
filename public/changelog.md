
# Changelog

## [Unreleased]
- 0001: truncate name for cutlass profiler (#2124)

Co-authored-by: yuzhai <yuzhai@nvidia.com> (by Yujia Zhai)
- 0002: Hopper Grouped GEMM support for FP8 Accum (#2123)

* Add support for fp8accum, with profiler extension

* Update .gitignore

* contri

---------

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by ANIKET SHIVAM)
- 0003: update 3.8 v2 (#2112)

* update 3.8 v2

* update 3.8

---------

Co-authored-by: yuzhai <yuzhai@nvidia.com> (by Yujia Zhai)
- 0004: Always use cudaGetDriverEntryPoint with CUDA 12 (#2086)

`cudaGetDriverEntryPointByVersion` has been added to drivers in 12.5, but we don't know at compile time the driver version.
In particular, we can build with nvcc 12.8 for a 12.2 driver for instance, and this was causing the following error:

```
undefined symbol: cudaGetDriverEntryPointByVersion,
``` (by dan_the_3rd)
- 0005: Add ParetoQ to PUBLICATIONS.md (#2089) (by Sijia(Jackson) Chen)
- 0006: Update 0x_gemm_tutorial.md (#2090) (by botbw)
- 0007: v3.8.0 update (#2082)

* 3.8 update

* fix Markus' name

---------

Co-authored-by: yuzhai <yuzhai@nvidia.com> (by Yujia Zhai)
- 0008: [EVT] Add support for Row/Col broadcast PtrArray (#2033)

* Add group support to EVT row/col broadcast.

* small modifications

---------

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Josh Fromm)
- 0009: bugfix generic-k code in top-k with softmax (#1993)

* bugfix generic-k code in top-k with softmax

* Update include/cutlass/epilogue/fusion/sm90_visitor_topk_softmax.hpp

Co-authored-by: Ali Hassani <68103095+alihassanijr@users.noreply.github.com>

* Update examples/61_hopper_gemm_with_topk_and_softmax/61_hopper_gemm_with_topk_and_softmax.cu

Co-authored-by: Ali Hassani <68103095+alihassanijr@users.noreply.github.com>

---------

Co-authored-by: Ali Hassani <68103095+alihassanijr@users.noreply.github.com> (by Tadej Ciglarič)
- 0010: Groupwise scaling along M for FP8 gemm (#2037)

* FP8 groupwise scaling along M

* small updates

---------

Co-authored-by: zl <zl@deepseek.com>
Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Liang)
- 0011: Update README.md (by Haicheng Wu)
- 0012: fix a readme broken link (#2069) (by Haicheng Wu)
- 0013: fix cuda 12.6 issues (#2066) (by Haicheng Wu)
- 0014: CUTLASS 3.8 Release (#2059)

* CUTLASS 3.8 Release

* update

* Update README.md

* Revert "Update README.md"

This reverts commit b353e36fe83e0815f99b44e46c0c95494c44726b.

* update

* update

---------

Co-authored-by: Haicheng Wu <57973641+hwu36@users.noreply.github.com>
Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by mihir-awatramani)
- 0015: update 3.7 docs (#2051)

* update docs

* update docs

* update docs

* update docs

* update docs

---------

Co-authored-by: yuzhai <yuzhai@nvidia.com> (by Yujia Zhai)
- 0016: CUTLASS 3.7 (#2045)

* CUTLASS 3.7

* clean up changelog

---------

Co-authored-by: yuzhai <yuzhai@nvidia.com>
Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Yujia Zhai)
- 0017: fix assertion in integer_subbytes.h (#1961) (by bobliao)
- 0018: Blockwise Scaling for FP8 (#1932)

* F8 Blockwise Scaling

* two more NumProducerThreadEvents

---------

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Manish Gupta)
- 0019: Add Line Break (#2020) (by Lei Mao)
- 0020: Fix Typos (#2021)

* Fix Typo

* Fix Typo (by Lei Mao)
- 0021: Fix typo in library_defaults.py (#2024) (by ZincCat)
- 0022: Add vector-types back to platform.h (#2026) (by Driss Guessous)
- 0023: Add half->int8 saturate conversion to promise valid range (#1983)

* Add half->int8 saturate conversion to promise valid range

* add gpu only macro

---------

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by ZZK)
- 0024: fix mem fence (#2030)

Co-authored-by: yuzhai <yuzhai@nvidia.com> (by Yujia Zhai)
- 0025: fix bug: arch/mma_sm60.h Mma<2,2,1> calculate wrong (#1989) (by Dongxu.Wang)
- 0026: Update 0x_gemm_tutorial.md (#1982)

Shouldn't this be BLK_M, BLK_**K**, k (by Andrew O'Neill)
- 0027: Update CHANGELOG.md (by Haicheng Wu)
- 0028: 3.6.0 update (#2005)

* 3.6.0 update

* doc and swap stuff

---------

Co-authored-by: yuzhai <yuzhai@nvidia.com>
Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Yujia Zhai)
- 0029: Fix Typo (#1962) (by Lei Mao)
- 0030: Fix CuTe README Typo (#1951) (by Lei Mao)
- 0031: fix a typo that fails the compiling when ElementScale is not the same as MmaType (#1977) (by Lain)
- 0032: Improve mixed dtype GEMM (#1972)

* update

* fix a typo (by Lain)
- 0033: add {uint4, uint2, int2} => {fp16, bf16} conversion (#1966) (by Lain)
- 0034: Fix `cutlass` python library with cuda `12.6.2.post1` (#1942)

* Fix `cutlass` python library with cuda `12.6.2.post1`

Previously we had this error:
```
  File "/storage/home/cutlass/python/cutlass/backend/operation.py", line 39, in <listcomp>
    _version_splits = [int(x) for x in __version__.split("rc")[0].split(".")]
                       ^^^^^^
ValueError: invalid literal for int() with base 10: 'post1'
```

* Update sm90_utils.py

* Update generator.py

* Update python/cutlass_library/generator.py

Co-authored-by: Jack Kosaian <jackkosaian@gmail.com>

* Update python/cutlass_library/sm90_utils.py

Co-authored-by: Jack Kosaian <jackkosaian@gmail.com>

---------

Co-authored-by: Jack Kosaian <jackkosaian@gmail.com> (by dan_the_3rd)
- 0035: Fix the racing condition of mixed-input gemm when writing the registers (#1931)

* move two warpgroup_wait

* merge main

---------

Co-authored-by: Siyuan Fu <siyuanf@nvidia.com> (by Lain)
- 0036: fix undefined in device code error (#1880) (by LiYu Lu)
- 0037: remove restriction of stride == kernel in nhwc_pooling (#1896) (by LiuQiang)
- 0038: Update publications (#1912) (by Wenlei Bao)
- 0039: feat: support kFactor 8 used in mma tensor op tile iterator (#1512) (by chenwei)
- 0040: Refactor some GroupedGEMM logic (#1899) (by azhurkevich)
- 0041: Add a print for the uint{x}b_t type. (#1871) (by LiYu Lu)
- 0042: fix wrong A/BLayout in MMA_Traits for binary mma and append other MMA_Traits support  (#1856)

* fix wrong A/BLayout in  MMA_Traits<SM80_16x8x256_S32U1U1S32_TN_XORPOPC> and append support for  m8n8k128, m16n8k128  mma.and.popc in MMA_Traits instantiation

* add "print" template for  subbyte_reference<T> (by Caleb_Du)
- 0043: remove redundant hardcoded packing configs in mixed dtype gemm (#1894)

Co-authored-by: Siyuan Fu <siyuanf@nvidia.com> (by Lain)
- 0044: Update gemm_f16n_f16t_f32t_tensor_op_f32_sm80.cu with include "cutlass/gemm/device/gemm_universal.h" (#1569)

fix compile with `cmake .. -DCUTLASS_ENABLE_TESTS=ON -DCUTLASS_TEST_LEVEL=2` (by 侯奇)
- 0045: Include of regular_tile_iterator.h fixed for NVRTC (#1765)

* Include of regular_tile_iterator.h fixed for NVRTC

* More include fixed for NVRTC (by MaxAkaAltmer)
- 0046: Adjusting code indentation (#1639) (by 103yiran)
- 0047: Fix README (#1658)

* Fix README

* Improve README

---------

Co-authored-by: Haicheng Wu <57973641+hwu36@users.noreply.github.com> (by Lei Mao)
- 0048: added mapping for bf16 to torch::kBFloat16 (#1843)

Co-authored-by: Haicheng Wu <57973641+hwu36@users.noreply.github.com> (by Bogumil Sapinski Mobica)
- 0049: fix by adding public (#1753) (by Xinyu Yang)
- 0050: fix typo (#1853) (by sijialou)
- 0051: add maximum support (#1833) (by Xinyu Yang)
- 0052: Add all supported GMMA shapes (#1890) (by Sergey Klevtsov)
- 0053: Add GMMA shape m64n40k16 (#1864) (by Tri Dao)
- 0054: Improve sm90 mixed dtype kernel (#1883) (by Sergey Klevtsov)
- 0055: add is_last_tile (by Haicheng Wu)
- 0056: Handle MNK Sm90{Row, Col}Reduction problem shapes (#1803) (by Saagar Jha)
- 0057: CUTLASS 3.6.0 (#1850)

* v3.6

* update changelog

* update readme

* fix typo

* fixing typos

* hopper gemm with weight prefetch

---------

Co-authored-by: yuzhai <yuzhai@nvidia.com>
Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Yujia Zhai)
- 0058: Fix typo in comment (#1787) (by Feng Shijie)
- 0059: Fix typos in test/unit/conv/cache_testbed_output.h (#1652)

Co-authored-by: Alexander Zinoviev <azinoviev@tesla.com> (by Alexander Zinoviev)
- 0060: Fix cute doc (#1529) (by Wilber)
- 0061: Add some can implement rules of hopper convolution. (#1835) (by Junkai-Wu)
- 0062: Adjust profiler space for SM89 (#1553) (by Wenlei Bao)
- 0063: Add print_svg for mma (#1733)

* add print_svg for mma

* correct the code indentation (by reed)
- 0064: Fix MMA promotion interval assertions (#1641) (by Chenggang Zhao)
- 0065: add publication: ‘EVT: Accelerating Deep Learning Training with Epilogue Visitor Tree’ (#1526)

Co-authored-by: Haicheng Wu <57973641+hwu36@users.noreply.github.com> (by reed)
- 0066: Prefix a member template name with the template keyword. (#1796)

Fixes llvm buld error. (by John Shumway)
- 0067: Support for TMA Epilogue for Group Gemm and add pingpong ptr array & Group Gemm (#1795) (by Junkai-Wu)
- 0068: fix assertion (#1790) (by Sean Xiaowen Zhang)
- 0069: Support ComputeFn where output type differs from input type (#1771)

This is useful for e.g. function taking in 2 float inputs and turn them to complex (by Tri Dao)
- 0070: set_slice3x3 -> set_slice_3x3 (#1784) (by Gabriel Wu)
- 0071: Remove extraneous comma in declaration (#1776) (by Saagar Jha)
- 0072: Add Sm90LinCombPerColBias (#1774)

Co-authored-by: Jiayu Sun <jiayus@s4124-0071.nvidia.com> (by JiayuSun)
- 0073: Update barrier.h (#1782) (by Alchan Kim)
- 0074: Add support for mixed 4-bit/8-bit data types GEMM (#1413)

* Add support for mixed 4-bit/8-bit data types GEMM

* fix ( and )

---------

Co-authored-by: Aleksandar Samardžić <asamardzic@matf.bg.ac.rs>
Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Aleksandar Samardžić)
- 0075: minor fix for a double quote in CMakeLists.txt (#1727) (by Shreya Gaur)
- 0076: Use CUDA runtime API to retrieve function pointer to driver API (#1700)

* Query pfn to driver api

* use default for older toolkits

---------

Co-authored-by: shunfans <shunfans@nvidia.com> (by shunfan-shao)
- 0077: Merge pull request #1714 from NVIDIA/u128_div

fix uint128 (by Dustyn Blasig)
- 0078: Add couple configs into generator.py for mixed input MM (#1350)

* Add couple configs into generator.py for mixed input MM

* change one unit test name; reenable 128x32 in the profiler

* Added U8/BF16 tests.

---------

Co-authored-by: Haicheng Wu <haichengw@nvidia.com>
Co-authored-by: Haicheng Wu <57973641+hwu36@users.noreply.github.com> (by Aleksandar Samardžić)
- 0079: fix uint128 (by Haicheng Wu)
- 0080: Merge pull request #1713 from NVIDIA/351_sparse_update

update 3.5.1 readme/changelog (by Dustyn Blasig)
- 0081: update 3.5.1 readme/changelog (by Haicheng Wu)
- 0082: Update half.h (#1709) (by eqy)
- 0083: 3.5.1 plots and updated readme (#1708)

Co-authored-by: dePaul Miller <23461061+depaulmillz@users.noreply.github.com> (by dePaul Miller)
- 0084: Add CLayout_64x208 (#1680)

Without this I get compilation error when the extended shapes are enabled (by Tri Dao)
- 0085: 5476 cutlass 3x gemm kernels (#1695)

Co-authored-by: dePaul Miller <23461061+depaulmillz@users.noreply.github.com> (by dePaul Miller)
- 0086: support data type w2 used in cutlass_library (#1517) (by chenwei)
- 0087: Fix isnan namespace qualification in cutlass/functional.h (#1679)

* Fix unrelated MSVC build warnings

* Fix use of isnan in functional.h

Correct namespace qualification of isnan in functional.h
so that it invokes cutlass::isnan for half_t, instead of
converting half_t to float and invoking std::isnan (on host,
or ::isnan on device). (by Mark Hoemmen)
- 0088: 1x1x1 cluster launch (#1673) (by dePaul Miller)
- 0089: Stamp out 1x1x1 clusters, 128x256 CTA shape (#1665)

Adds 128x256 tile shapes to FP16/BF16 and FP8 generators.
Also adds 1x1x1 clusters to all existing FP16/BF16/FP8 generators.

NOTE: it is important to set kernel filter (--kernels /
CUTLASS_LIBRARY_KERNELS) to a non empty string and skip pruning to get
all of the new configurations.

If profiling exhaustively, they can be set to `*`.

Number of CUTLASS 3.X GEMMs before this commit: 2868
Number of CUTLASS 3.X GEMMs after this commit: 4016

Co-authored-by: Ali Hassani <ahassani@nvidia.com> (by Ali Hassani)
- 0090: Add extended wgmma shapes for all data types (#1666) (by Sergey Klevtsov)
- 0091: Skip void-C kernels in the profiler when beta is non zero (#1661)

* Skip void-C kernels in the profiler when beta is non zero

CUTLASS profiler will only skip disposition for void-C kernels when beta
is non zero, when it makes more sense to skip running it in the first
place.

Not all users are aware of void-C kernels (as far as I know it wasn't a
thing in 2.X), and not everyone remembers to filter out voidC kernels
when running the profiler with a non zero beta.

The easiest solution (and as far as I can tell correct way of handling this)
is that `can_implement` return `false` when beta is non zero (or
whatever argument indicates an epilogue source) but we have a void-C
kernel.

Profiler already includes functionality to skip running kernels that
fail `can_implement`.

* Move checks to collectives instead

---------

Co-authored-by: Ali Hassani <ahassani@nvidia.com> (by Ali Hassani)
- 0092: Profiler docs and argument update for raster order (#1667) (by dePaul Miller)
- 0093: fix build on SM 5.2 (#1664) (by eqy)
- 0094: Add more GMMA shapes (#1630)

* Add more GMMA shapes

* Add more shapes for BF16 (by Tri Dao)
- 0095: CUTLASS 3.5.1 (#1623)

* CUTLASS 3.5.1

* updates, optimizations, fixes (by Vijay Thakkar)
- 0096: Fix grouped gemm invalid memory access to problem shapes (#1543) (by Chengquan Jiang)
- 0097: fix mbarrier invalidate (#1494) (by Kevin Tong)
- 0098: Fix SMEM index for C in CuTe examples (#1477) (by Joe Rowell)
- 0099: [bug] fix device thread `gemm.h` constructor (#1473) (by LiYu Lu)
- 0100: Add Faster Neighborhood Attention to pubs (#1471) (by Ali Hassani)
- 0101:   Support use of external/system GTest installation (#1469)

* Support use of system/external GTest installation

* Create working directory for tests explicitly (by Daniel Richard G)
- 0102: Fix B operand variable name and comments (#1458) (by Andy Lo)
- 0103: Fix typos in convolution tests (#1433) (by Alexander Zinoviev)
- 0104: Update gemm_api_3x.md (#1386)

Fixed what it seems to be an obvious typo. (by Raul)
- 0105: Fix C++17 version detection in helper_macros.hpp (#1479)

* It seems that __cplusplus can be inconsistent with _MSVC_LANG when discerning C++17 version. See https://github.com/NVIDIA/cutlass/issues/1474. Added switch to check _MSVC_LANG in addition to __cplusplus

* Fixed typo.

* Oops, another typo.

* Changed incorrect logic, ifndef to ifdef

* Define CUTLAS_CPLUSPLUS for language version testing

Co-authored-by: Mark Hoemmen <mhoemmen@users.noreply.github.com>

---------

Co-authored-by: Mark Hoemmen <mhoemmen@users.noreply.github.com> (by Nick John Eliopoulos)
- 0106: [Documentation] Fixes the confusion between concatenated vs. composed layout in CuTe documentation  (#1498)

* Update 02_layout_algebra.md

* Update 02_layout_algebra.md (by Manish Gupta)
- 0107: Fix typos in cute docs (#1486)

* fix typos in 02_layout_algebra.md

* fix typos in 03_tensor.md (by Sin)
- 0108: Update packed_stride.hpp to add CUTLASS_HOST_DEVICE decorator to new functions (#1495) (by djns99)
- 0109: Updates for CUTLASS 3.5.0 (#1468) (by Vijay Thakkar)
- 0110: Update 02_layout_algebra.md (#1451)

change line 348 to reflect correct layout. (by Mehdi Yazdani)
- 0111: add missing header for size_t in `numeric_types.h` (#1420)

* add missing header for size_t in `numeric_types.h`

* make nvrtc happy

* add missing header for int types in `cutlass/arch/memory.h`

---------

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by lzw)
- 0112: Fix uint128 operator add (#1400)

* fix uint128 operator add for 64-bit hilo implemenation

* add uint128 test for operator add

* make clang happy

---------

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by reed)
- 0113: Python `Gemm` `tile_descriptions` fix (#1439)

* fix python gemm tile descriptions

* fix formatting

* fix math_operation filtering

* fix formatting (by jeromeku)
- 0114: fix stride compilation warning (#1415) (by reed)
- 0115: [NFC] improve doc: fix typo in mma doc (#1417) (by Tom Tan)
- 0116: group gemm set stride L = cute::Int<0> (#1416) (by seventh)
- 0117: CUTLASS 3.5.0 (#1411) (by Vijay Thakkar)
- 0118: (NFC) improve doc: Add missing verb to sentence (#1377)

Co-authored-by: lorenzo chelini <lchelini@nvidia.com> (by lorenzo chelini)
- 0119: fix `tile_size(TiledCopy<Args...> const&)` error (#1357) (by LiYu Lu)
- 0120: Updates for CUTLASS 3.4.1 (#1346)

* Updates for CUTLASS 3.4.1

* minor epi change (by ANIKET SHIVAM)
- 0121: Add a missing platform include (#1328) (by Driss Guessous)
- 0122: Fix missing include file (#1318) (by Chenggang Zhao)
- 0123: Modify comments in code  examples/08_turing_tensorop_gemm/turing_tensorop_gemm.cu (#1325) (by xws117)
- 0124: fix unrecognized print format specifier for int8/uint8 (#1303)

* fix unrecognized print format specifier for int8/uint8

* use c++ static_cast instead of c cast style (by reed)
- 0125: fix tile_size_mnk compilation warning (#1294) (by reed)
- 0126: Update PUBLICATIONS.md

ptq paper from goog (by Haicheng Wu)
- 0127: Update PUBLICATIONS.md

add odyssey llm paper from metuan (by Haicheng Wu)
- 0128: update publications (#1308) (by jayhshah)
- 0129: Remove sparse GEMM with row broadcasted bias vector (#1302)

This reverts commit d3e72719b4addbb45c461d7169b0f8a4145edf65.

Co-authored-by: Aleksandar Samardžić <asamardzic@matf.bg.ac.rs> (by Aleksandar Samardžić)
- 0130: Support ElementD to be void for tma (#1153)

* Support void D with AuxStore

* refine get_element_aux (by Chengquan Jiang)
- 0131: Update license year (#1306) (by ANIKET SHIVAM)
- 0132: Updates for 3.4 release. (#1305) (by ANIKET SHIVAM)
- 0133: Fix flops calculation and tensor b stride calculation in the example 36 (#1278)

* Fix flops calculation and tensor b stride calculation in the example 36

* Fix datatype

* Update gather_scatter_fusion.cu (by Tianao Ge)
- 0134: Fix cute::array<T, 0> iterator (#1273) (by Eugene Zhulenev)
- 0135: expose stream API in python kernel call interfaces (#1287)

* expose stream API in python kernel call interfaces

* add stream to ReductionArguments; document stream arg

* add stream argument to GemmGroupedArguments (by Kun Wu)
- 0136: Allow per-column bias in EpilogueTensorBroadcast (#1275)

* Allow per-column bias in EpilogueTensorBroadcast

EpilogueTensorBroadcast only supports per-row vector broadcast, because
the bias stride is hardcoded.

It can easily support both if the bias stride is made conditional, and
the original behavior is maintained by defaulting to per-row.

* Add unit test for EpilogueTensorBroadcast with per-col bias

---------

Co-authored-by: Ali Hassani <ahassanijr@gmail.com>
Co-authored-by: Ali Hassani <ali@hippoml.com> (by Ali Hassani)
- 0137: fix typo (#1279) (by Jee Li)
- 0138: Add support for sparse GEMM with visitor epilogue (#1189)

* Add support for sparse GEMM with visitor epilogue

* Refactor changes at the kernel level (by Aleksandar Samardžić)
- 0139: CUTLASS 3.4.0 (#1286)

* CUTLASS 3.4.0

* Update CHANGELOG.md

---------

Co-authored-by: Pradeep Ramani <prramani@nvidia.com> (by Pradeep Ramani)
- 0140: Fix inline ptx escaping for predicates. (#1264)

* Fix inline ptx escaping for predicates.

Prevents `error: invalid % escape in inline assembly string` when compiling with clang.

* More double-quoting. (by Christian Sigg)
- 0141: Remove undefined behavior from default constructor of PredicatedTileAccessIteratorParams. (#1258)

Currently, the default constructor of
`PredicatedTileAccessIteratorParams` will invoke undefined behavior in
its invocation of the `initialize` function. Specifically, it will
attempt to read from the uninitialized variables
`desc.element_size_bits` and `desc.advance_rank`. This commit changes
the default constructors of both `*Params` and `*Desc` to
zero-initialize all uninitialized members. (by Gregory Meyer (gregjm))
- 0142: Use size_t index to iterate up to std::vector::size() (#1251)

Fixes a different signedness compare warning. (by Andrey Portnoy)
- 0143: Collection of changes to fix clang build. (#1200)

* Remove unused variables

* Qualify calls to make_fragment_? from templated base class.

Fixes clang build error.

* Add missing `#include <cstdio>`

* Various changes to fix clang compile errors.

* More changes to fix clang build.

Remaining issues:

- `params` initializer of `CollectiveEpilogue`.
- `ops` initializer of `Sm90VisitorImplBase`.
- `__usAtomicCAS` needs to be added to clang upstream.

* Fix remaining clang build issues.

* Qualify `cute::rank()` calls.

* Qualify some more calls that are otherwise ambiguous between `cute` and `std` namespace.

* Double-escape special registers in inline asm.

* small change

---------

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Christian Sigg)
- 0144: Fix bug in single source GEMM with residual + streamk (#1249)

Followup to #1224.

A change in the stream-k threadblock swizzle ctor since 3.3 breaks
single source GEMM with fused epilogue and stream-k. Multi-source was
already corrected.

Co-authored-by: Ali Hassani <ahassanijr@gmail.com> (by Ali Hassani)
- 0145: Fix typo in quickstart.md (#1257) (by Valeriy Fedyunin)
- 0146: Update PUBLICATIONS.md (by Haicheng Wu)
- 0147: Fix Stream-K reduce bug in epilogue with broadcast (#1224)

Co-authored-by: Ali Hassani <ahassanijr@gmail.com> (by Ali Hassani)
- 0148: Updates and Bug fixes to CUTLASS 3.3 (#1232) (by Pradeep Ramani)
- 0149: Fixed illegal PTX syntax (#1225) (by Haicheng Wu)
- 0150: Add missing `#include <cstdio>` (#1197)

* Add missing `#include <cstdio>`

* move to non nvrtc part

---------

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Christian Sigg)
- 0151: Qualify calls to make_fragment_? from templated base class. (#1196)

Fixes clang build error. (by Christian Sigg)
- 0152: Remove unused variables (#1195) (by Christian Sigg)
- 0153: Fix some sign conversion warnings (#1172)

* Fix sign conversion warnings

* Fix type conversion warnings

* Fix sign conversion warnings

* Change smem_size_ to constexpr

* clang warnings

* undo cast change

* one miss change

* missing part

---------

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by cyyever)
- 0154: Explicitly cast `blockIdx` to `uint3` (#1192)

This works around a clang issue where blockIdx is of a different type. (by Christian Sigg)
- 0155: Add subclass declarations to generated files. (#1193) (by Christian Sigg)
- 0156: Adding missing `typename` (#1191)

Fixes clang build failures. (by Christian Sigg)
- 0157: fix cp.async L2 prefetch typo (#1187) (by reed)
- 0158: Updates to Python interface for PyPI packaging (#1209)

* Updates

* Updates to notebooks (by Jack Kosaian)
- 0159: Allow SM90 pingpong kernel to use custom tile schedulers (#1194)

Co-authored-by: Sergey Klevtsov <sklevtsov@nvidia.com> (by Sergey Klevtsov)
- 0160: enable L2::128B prefetch for cp.async by default (#1177) (by reed)
- 0161: Fix `std::abs` overloading for `bfloat16_t` (#1179) (by Changho Hwang)
- 0162: Doc only change changelog 3.3 (#1180) (by Manish Gupta)
- 0163: fix missing return warning (#1173) (by reed)
- 0164: Fix several broken links (#1168)

Co-authored-by: isaacw <isaacw@nvidia.com> (by wang-y-z)
- 0165: Fix several typos (#1169)

Co-authored-by: isaacw <isaacw@nvidia.com> (by wang-y-z)
- 0166: CUTLASS 3.3.0 (#1167)

* Release 3.3.0

Adds support for mixed precision GEMMs On Hopper and Ampere
Adds support for < 16B aligned GEMMs on Hopper
Enhancements to EVT
Enhancements to Python interface
Enhancements to Sub-byte type handling in CuTe
Several other bug-fixes and performance improvements.

* minor doc update (by Pradeep Ramani)
- 0167: clean the format (#1140) (by reed)
- 0168: Fix is_zero (#1147)

* Fix is_zero

* Use constexpr

* Add CUTLASS_PRAGMA_UNROLL to loops

* Avoid if branches in is_zero (by cyyever)
- 0169: Fix broken pipeline link in docs (#1143) (by milesvant)
- 0170: fix alignmentC for h16816_s8xf16 (#1146)

* fix alignmentC for h16816_s8xf16

* manish's change (by Haicheng Wu)
- 0171: Adding more Threadblock Tiles for Mixed-input TensorOp (BF16 * S8) in cutlass_library (#1132)

* Adding more tiles in the cutlass_library for mixed-input support.

* fix rebase issue

* more tiles to upcast a (by Manish Gupta)
- 0172: fix missing return warning for repeat and axpby (#1124) (by reed)
- 0173: Add config.yml issue template with Discord link. (#1135) (by Jake Hemstad)
- 0174: Fx parallel split-k (#1116) (by Manish Gupta)
- 0175: Add missing int64 and uint64 overloads for conj (#1127)

Signed-off-by: Krzysztof Lecki <klecki@nvidia.com> (by Krzysztof Lecki)
- 0176: set kIsHeavy member variables (#1012)

* set kIsHeavy member variables

* correct kIsHeavy value for Tanh

* set kIsHeavy=false for HardSwish

---------

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Fabian Schuetze)
- 0177: Add #include <limits> to platform.h (#1121)

Closes #1118 (by Kyle Gerard Felker)
- 0178: Allow changing epsilon parameter in RMS norm kernel (#1112) (by masahi)
- 0179: Fix type typo in rmsnorm (#1119)

Initially the variable `h4` is `half4`, but its last two fields are not used. Based on the semantics and the context, I believe it should be `half2`. (by Lequn Chen)
- 0180: Support for Mixed Input TensorOp  (#1084)

* Passing warp-level mixed input F16*(S8/U8) tests

* passing device-level mixed input F16*(S8/U8) tests

* add to profiler - I8 (111 TFLOPs), U (123 TFLOPs)

* fast numeric conversions (I8 = 132 TFLOPs, U8 = 148 TFLOPs)

* Speedup reference compilation (REVERT THIS COMMIT)

* wider_add.u32_packed_sub.f16x2 (I8 = 132TFLOP/s, U8 = 170 TFLOP/s)

* Improve s8->f16 cvt and support bf16*u8 @158 TFLOPs

* BF16 * S8 (142 TFLOPs)

* Handle mixed-input upcast on OperandA (Support [S8|U8]*[F16|BF16]

* rename OpMultiplyAddMixedInput to OpMultiplyAddMixedInputUpcast

* Add device-level test and profiler support for upcast on operand A

* Move shfl before the cvt and reduce #shfls by 1/2

* fix smem_usage calculation for mixed_input types

* uncomment the stuff (getting ready for merge)

* profiler changes and mixed-input reference

* mixed input reference are in a new file

* use platform instead of std

* comments and typo only

* Use CreateGemmOperator and delete CreateMixedInputGemmOperator

* copyright for new files

* rebase follow-up (by Manish Gupta)
- 0181: Fix Parallel Split-K on Gemm Operation Profiler (#1109)

* Debug and fix for parallel split-k in profiler

* restore debug files and remove prints (by Manish Gupta)
- 0182: Change the position of minus sign in line1549 array.h (#1091)

when I use cutlass::epilogue::thread::LinearCombinationSigmoid, I encounter the this error:
cutlass/include/cutlass/array.h(1549): error: no operator "-" matches these operands
Moving  operator "-" from line 1549 to 1548 can solve this error (by xuhaoran)
- 0183: [fix] fix comparison operator for integer_subbyte (#1090) (by ZCHNO)
- 0184: CUTLASS 3.2.1 (#1113)

* Updates for 3.2.1 release.

* Minor fix in gemm op profiler for raster order.

* Add scheduler mapping for raster order in the kernels. (by ANIKET SHIVAM)
- 0185: fix GmmaDescriptor print format string error (#1102) (by reed)
- 0186: Replace 0x1f with 0xffffffff in __shfl_sync (#1097)

This fixes compatibility with H100 and resolves #1094 (by Vadim Markovtsev)
- 0187: fix matrix B indices (#1089) (by Yujia Zhai)
- 0188: style(examples): typo (#1080)

* Update ampere_tensorop_conv2dfprop.cu

learning cutlass, PR a typo.

* Update ampere_gemm_operand_reduction_fusion.cu (by tpoisonooo)
- 0189:  standarize fp8 generator (#1078) (by ANIKET SHIVAM)
- 0190: make only visible on device (#1071) (by Driss Guessous)
- 0191: Shard gemm reference templates into multiple TUs for parallel compilation (#1043)

* Split apart gemm reference templates into multiple TUs for parallel compilation

* remove old files

* better balancing of ref kernels across TUs

* remove 3 new added refcheck kernels and some un-necessary fp8 library instances to reduce lib size

* remove auto fp8 kernels

* remove some redundant kernels (by Vijay Thakkar)
- 0192: fix cinttypes issue with STDC_FORMAT_MACROS (#1068)

* fix cinttypes issue with STDC_FORMAT_MACROS

* Update mma_sm90_desc.hpp

* Update mma_sm90_desc.hpp

---------

Co-authored-by: Haicheng Wu <57973641+hwu36@users.noreply.github.com> (by Aman Gupta Karmani)
- 0193: Add simple hash and eq methods for gemm_operations. (#1053) (by Ying Zhang)
- 0194: fix typos (#1059) (by reed)
- 0195: Fix numeric conversion warning (#1021)

* fix numeric conversion unused var

* update

---------

Co-authored-by: Lufang CHEN 陈橹方 <lufang.chen@nio.com> (by Lufang Chen)
- 0196: Updates for 3.2 release (#1065) (by ANIKET SHIVAM)
- 0197: Add one Publication which is inspired by cutlass (#1022) (by reed)
- 0198: Avoid cute::print compiler warnings with -Wformat-security (#1041)

Fixes issue #1040. (by Allard Hendriksen)
- 0199: fix typo (#1047) (by zhu jianjiang)
- 0200: Fix typo in `0x_gemm_tutorial.md` (#1035) (by lorenzo chelini)
- 0201: [doc] fix: fix typos in the comment (#1049) (by Haibin Lin)
- 0202: torch.bfloat16 support in cutlass python (#1037)

* torch.bfloat16 support in cutlass python

* Update datatypes.py (by Sophia Wisdom)
- 0203: CUTLASS 3.2 (#1024)

* CUTLASS 3.2 (by ANIKET SHIVAM)
- 0204: Fix one publication (#1019) (by Xianyao Zhang)
- 0205: spelling (#1007)

logicial -> logical (by Sophia Wisdom)
- 0206: fix layout bug (#1006) (by Tianqi Zhang (张天启))
- 0207: Update fMHA kernels (#992)

* Update fMHA kernels

Upstream recent changes to fMHA that we did in xFormers.
Previous version in CUTLASS: facebookresearch/xformers@b6be33a
Updating to: facebookresearch/xformers@55a4798

* minor changes

* make var work

---------

Co-authored-by: danthe3rd <danthe3rd>
Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by dan_the_3rd)
- 0208: Add RMS norm (#979) (by masahi)
- 0209: fix epilogue iterator error (#995)

* fix epilogue iterator error

* fix epilogue iterator error

---------

Co-authored-by: maxiao <maxiao@cowarobot.com> (by ChangyouSiom)
- 0210: fix minor typos (#984) (by Nathan Wang)
- 0211: add library_dirs (#977) (by q.yao)
- 0212: Fix Int8 and TF32 generator (#976) (by ANIKET SHIVAM)
- 0213: Add grouped b2b GEMM (#970) (by Jack Kosaian)
- 0214: Update Hopper performance plot for CUTLASS 3.1 + CTK 12.1 (#967) (by Vijay Thakkar)
- 0215: Add conversion from ElementBias to ElementCompute (#961) (by Jack Kosaian)
- 0216: Update README.md (by Haicheng Wu)
- 0217: Update CHANGELOG.md (by Haicheng Wu)
- 0218: Update PUBLICATIONS.md (by Haicheng Wu)
- 0219: Add support for sparse GEMM with row broadcasted bias vector (#951) (by Aleksandar Samardžić)
- 0220: Adds CUDA path for x86-64 (#957) (by Ali Hassani)
- 0221: More updates for 3.1 (#958)

* Updates for 3.1

* Minor change

* doc link fix

* Minor updates (by ANIKET SHIVAM)
- 0222: Stream-K with broadcast (#892)

* [WIP] GEMM StreamK w/ Fused Epilogue

* Adds Gemm Streamk with Fused Epilogue kernel level struct.
  * Mostly based on Gemm with Fused Epilogue,
  * Requires a new epilogue
  * Work in progress

* [WIP] StreamK support for GemmUniversalWithBroadcast

* Just based off of how StreamK is allowed in GemmUniversal
  * Untested and a work in progress

* Minor fixes

* [WIP] It compiles!

It is almost certainly incorrect, but we're past getting the templates
to match, so checkpointing.

* Correction to reference kernel

* Fix typo

* Added MSE measurement

* Switch back to reference kernel + host for loop

Still WIP. Now we're getting even a larger MSE, but it's both on
basic Split-K and Stream-K.

* Fix typos

* Fix broadcast vector + requested changes

* Comment typo

* Small int option and more

* Fix incorrect condition on source needed

* Requested changes

* I think I got it?

* Bias vector should be stride 0

* Two source added!

* Typos

* Merge examples

* Bring back vector row offset

Just to ensure consistency with universal gemm with fused epilogue

* Base arguments and params structs for StreamK

* StreamK epilogue with broadcast now inherits the original

* undo params_streamk_base.h

---------

Co-authored-by: Ali Hassani <ahassanijr@gmail.com>
Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Ali Hassani)
- 0223: Update layout.md (by Haicheng Wu)
- 0224: Adding 128x256 tile for 16b input datatype WGMMA gemm (#950) (by Manish Gupta)
- 0225: Update gemm_api.md (by Haicheng Wu)
- 0226: replace division with multiplication in GELU (#942) (by wll)
- 0227: Fix host compilation of cute::cast_smem_ptr_to_uint. (#940)

* Remove references to device-only intrinsics when compiling for host.

Currently, we attempt to use the `__device__`-only functions
`__cvta_generic_to_shared` and `__nvvm_get_smem_pointer` when compiling
`cute::cast_smem_ptr_to_uint` for the host on Clang. This results in a
compilation error, as expected. This commit changes the definition of
the `*_ACTIVATED` macros so that they are only true when `__CUDA_ARCH__`
is defined; that is, when compiling for the device.

Additionally, the declaration of `__nvvm_get_smem_pointer`
is currently only visible during the device compilation pass when
compiling with NVCC; this commit makes the declaration visible during
host compilation with the `__device__` annotation.

* Annotate cute::cast_smem_ptr_to_uint as device-only.

The implementation of `cute::cast_smem_ptr_to_uint` is currently an
unchecked failure on host code, and the only host implementation I can
think of -- casting a probably-64-bit pointer to 32 bits somehow --
doesn't make sense to implement. This commit marks this function as
device-only so that it can't be accidentally used on host code.

* small change

---------

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Gregory Meyer (gregjm))
- 0228: Make operator() const-correct and add missing static functions. (#936)

* Make operator() const-correct and add missing static functions.

Currently, `*Converter::operator()` requires a mutable object to invoke,
and there are missing `static result_type convert(source_type const &
source)` overloads for certain partial specializations of `*Converter`
objects. This commit makes `operator()` const-correct and adds missing
function overloads where appropriate.

* minor changes

* format

---------

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Gregory Meyer (gregjm))
- 0229: Fix cuTE compilation with clang (#939)

- clang 1.14 complains about missing function from a host call:
  cutlass/include/cute/arch/util.hpp:106:32: error: no matching function for call to '__cvta_generic_to_shared'
  return static_cast<uint32_t>(__cvta_generic_to_shared(ptr));
- fixes this by defining CUTE_HOST_DEVICE for clang as well

Signed-off-by: Janusz Lisiecki <jlisiecki@nvidia.com> (by Janusz Lisiecki)
- 0230: Updates for 3.1 (#932) (by ANIKET SHIVAM)
- 0231: Add missing #include directive to get access to cutlass::epilogue::thread::ScaleType. (#925)

Currently, the `LinearCombinationClamp` header file is not standalone,
and must have the definition of `cutlass::epilogue::thread::ScaleType`
already available when it is `#include`d. (by Gregory Meyer (gregjm))
- 0232: Get SM count with cudaDeviceGetAttribute in KernelHardwareInfo (#927) (by Adnan Akhundov)
- 0233: Add missing schedules argument in SM90 fp16 op generation (#920) (by Adnan Akhundov)
- 0234: Add missing checks for NVRTC in CuTe (#921) (by Jakub Szuppe)
- 0235: Fix for dangling references in the MHA example (#918) (by Alexander Zinoviev)
- 0236: CUTLASS 3.1 Python interface documentation (#917)

* Add 12.1 Dockerfile

* Add 3.1 docs (by Jack Kosaian)
- 0237: Fix some typos in CuTe tutorials (#912) (by Adnan Akhundov)
- 0238: Allow L2 prefect for clang compiler (#914) (by Guray Ozen)
- 0239: added support of b2b bmm (#849)

* added support of b2b bmm

* fixed arguments and params structures

* added batch_count argument

* removed SplitKSerial and added new test case with b2b bmm

* fixed support of Kbatched and added new test case with batch stride

* added batch support for bias and scale

* make test

* small changes

---------

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Aleksandr Pivovar)
- 0240: CUTLASS 3.1 (#915)

Co-authored-by: Aniket Shivam <ashivam@nvidia.com> (by ANIKET SHIVAM)
- 0241: fMHA: Add backward pass (#844)

* fMHA: Add backward pass

* Better checks for strides/alignments

* Remove fb-internal URL

* torch.Tensor.untyped_storage requires pytorch 2.0+

* minor changes

* make test

---------

Co-authored-by: danthe3rd <danthe3rd>
Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by dan_the_3rd)
- 0242: Add tile_n=32 and tile_k=32 kernels in generator.py (#858) (by Shuai Shao)
- 0243: Remove const from 3.x GemmUniversalAdapter::operator() (#905) (by Adnan Akhundov)
- 0244: Increase max dynamic SMEM size in GemmSoftmax (#903) (by Adnan Akhundov)
- 0245: update gemm and conv2d cmdline --help output (#878) (by Adnios)
- 0246: Enable shared memory intrinsics and ldmatrix PTX on Clang. (#754)

* Enable shared memory intrinsics and ldmatrix PTX on Clang.

This commit adds preprocessor checks to enable the shared memory
intrinsics `__cvta_generic_to_shared` and `__nvvm_get_smem_pointer`, as
well as the `ldmatrix` PTX instructions, on Clang. Preventing these
intrinsics from being used is a significant latency regression on Clang.

* refine the macro

---------

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Gregory Meyer (gregjm))
- 0247: fix split_k_mode and add reduction kernel for f16 input/accum/output (#896) (by Manish Gupta)
- 0248: [layout] Fix AffineRank2ColumnMajor::packed() (#879)

* [layout] Fix AffineRank2ColumnMajor::packed()

* correct affine2row::packed

---------

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Feng Shijie)
- 0249: CUTLASS 3.0 Hopper GEMMs are GETTs in disguise (#897) (by Vijay Thakkar)
- 0250: add guards for __CUDA_ARCH__ >= 530 (#891)

* add guards for sm>=70

* drop guard to 530 (by ptrblck)
- 0251: add a CUTLASS publication (#893)

* add bytetransformer

* update arxiv link

* re-order (by Yujia Zhai)
- 0252: Update PUBLICATIONS.md

msft moe paper (by Haicheng Wu)
- 0253: Fix for dangling pointers (#885) (by Alexander Zinoviev)
- 0254: remove spurious comma (#871) (by Vijay Thakkar)
- 0255: Set batch_strides on Params::update (#883) (by Jack Kosaian)
- 0256: Fix sign-compare warning in `reorder_array` (#869)

`std::vector<T>::size_type` is unsigned type, so let's iterate over unsigned type as well


Discovered, while trying to enable PyTorch building without `-Wno-sign-compare` warning suppression, see https://github.com/pytorch/pytorch/actions/runs/4418987999/jobs/7746850762#step:10:10532 (by Nikita Shulga)
- 0257: Add missing comma in cutlass/arch/mma_sm90.h (#862) (by Vijay Thakkar)
- 0258: expose StoreT parameter for potential speed (#838)

* expose StoreT parameter for potential speed

* add storeT to more elementwise

---------

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Edward Rees)
- 0259: Hide streams and typinfo from nvrtc (#853)

* Hide streams and typinfo from nvrtc

* Use __CUDACC_RTC__ instead CUDA_ARCH for guard (by Stepan Tezyunichev)
- 0260: Fix typos 2 (#842)

Co-authored-by: Haicheng Wu <57973641+hwu36@users.noreply.github.com> (by Alexander Pivovarov)
- 0261: Updates for 3.0 (#857)

Co-authored-by: Aniket Shivam <ashivam@nvidia.com> (by ANIKET SHIVAM)
- 0262: Reduce versbosity in manifest.py (#845) (by Yinghai Lu)
- 0263: Re-enable aarch64 support lost in 277bd6e5379e0c1e1eb64db1a654b30e1efddc8e (#846) (by psaab)
- 0264: ex24[gemm_grouped]: Allow to change layout/dtype (#841)

* ex24[gemm_grouped]: Allow to change layout/dtype

* Address suggestion from @jackkosaian

---------

Co-authored-by: danthe3rd <danthe3rd> (by dan_the_3rd)
- 0265: Fix typos (#839) (by Alexander Pivovarov)
- 0266: streamk fix (#836)

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Haicheng Wu)
- 0267: fMHA: Sync FW with xFormers (#828)

* fMHA: Add support for bias+dropout in FW

* Remove 'getMaximumSharedMemoryPerBlockKb'

* fix comments

---------

Co-authored-by: danthe3rd <danthe3rd>
Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by dan_the_3rd)
- 0268: Add fixed_channel and few_channel mode to int8 in generator (#829) (by Shuai Shao)
- 0269: Update base_grouped.h (#832) (by Yuxin Wu)
- 0270: streamk fix (#830)

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Haicheng Wu)
- 0271: Changes to iterators to support s8 gemm with f16 outputs (#812)

* Changes to iterators to support s8 gemm with f16 outputs

* should work

---------

Co-authored-by: Sujan Gonugondla <gsujan@amaon.com>
Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Sujan Kumar Gonugondla)
- 0272: Update helper.h

copyright banner (by Haicheng Wu)
- 0273: Fix some typos (#791)

* fix typo

* fix a deadlink to code (by ZZK)
- 0274: fix alignmentC=8 for imma N=128 (#822)

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Haicheng Wu)
- 0275: Update dual_gemm_common.h

fix the copyright of a new file. (by Haicheng Wu)
- 0276: Extend DualGemm: support batched mode + decouple B0/B1 layouts (#790)

* Fix MHA kernel

Summary:

ATT

Test Plan:

Reviewers:

Subscribers:

Tasks:

Tags:

* Extend DualGemm to support batched mode (#5)

Following the GemmUniversalMode::kBatched implementation, batched mode is added to the DualGemm (under examples/45_dual_gemm). DualGemmMode::kBatched and SplitKSerial are not compatible: Status::kErrorInvalidProblem is returned if both are set.

* Decouple LayoutB0 and LayoutB1 in DualGemm

The DualGemm template assumed the same layout, LayoutB, for both right operand matrices B0 and B1. This is problematic if the layout of the two matrices is different. In particular, this may be the case when one of the matrices is row-major, while the other is a (column) vector that has to be broadcasted in column-major with zero stride (e.g., as {B1.device_data(), 0}) for the DualGemm implementation to be able to process B0 and B1 simultaneously.

In this commit, LayoutB0 and LayoutB1 are decoupled throughout the DualGemm code (device, kernel, and mma). Additionally, the batch strides of B0 and B1 are also decoupled to accommodate the column vector B1 case described above.

* Remove comment as no longer relevant

* Revert Fix MHA kernel

---------

Co-authored-by: mikeiovine <mikeiovine@fb.com> (by Adnan Akhundov)
- 0277: Fix type bug in conv2d/gemm with broadcast (#796)

add ElementVector

---------

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Shuai Shao)
- 0278: xFormer updates to fMHA FW (#773)

* xFormer updates to fMHA FW

* Convert format to BMHK for '41_fused_multi_head_attention_fixed_seqlen'

* Add missing files

* Remove xFormers specific code

* Update fused_multihead_attention_fixed_seqlen.cu

* rebase and solve conflicts

* remove white space

---------

Co-authored-by: danthe3rd <danthe3rd>
Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by dan_the_3rd)
- 0279: Add acc2smem in epilogue/threadblock/epilogue.h (#806) (by Jack Kosaian)
- 0280: Re-enable all alignments for int accumulators (#807) (by Jack Kosaian)
- 0281: Fix 8.4 + CUDA 11.4 build (#789)

Work around a likely GCC 8.x issue with fold expressions
and generic lambdas.

Only use the work-around when the host compiler is GCC 8.x.
This avoids any concerns about the work-around possibly
hindering inlining for a critical CuTe function (product).

Users can experiment with the work-around for other compilers
or compiler versions by defining the following macro.

CUTE_FOLD_GENERIC_LAMBDA_WORKAROUND

Fixes https://github.com/NVIDIA/cutlass/issues/788

Co-authored-by: Mark Hoemmen <mhoemmen@nvidia.com> (by Mark Hoemmen)
- 0282: CUTLASS 3.0.0 (#786)

* CUTLASS 3.0.0 (by Vijay Thakkar)
- 0283: New updates for 2.11 (#775)

* New updates.

* Minor profiler updates

Co-authored-by: Aniket Shivam <ashivam@nvidia.com> (by ANIKET SHIVAM)
- 0284: Enable aarch64 support (#779) (by psaab)
- 0285: streamk paper link (#765)

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Haicheng Wu)
- 0286: @hwu36 Adding the individual arXiv link for Stream-K paper. (#764)

* Stream-K individual paper entry.

* arXiv links updated. (by Muhammad Osama)
- 0287: streamk example and performance tuning (#760)

* streamk example and performance tuning

* one missing file

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Haicheng Wu)
- 0288: Adds missing semicolon (#759) (by Ali Hassani)
- 0289: Update PUBLICATIONS.md

@neoblizz @dumerrill 

thesis covering streamk (by Haicheng Wu)
- 0290: Add definitions for tag structs. (#752)

This commit changes the declarations of MMA operator class (SIMT, Tensor Core, WMMA Tensor Core) and operator type (multiply-add and so on) to definitions. This is done so that these tag structs are no longer incomplete types, which allows the `typeid` operator to be used on these tag structs. This is necessary for these tag structs to be used as type parameters in [GoogleTest typed tests](https://google.github.io/googletest/advanced.html#typed-tests). (by Gregory Meyer (gregjm))
- 0291: Add const overloads for iterator functions. (#753)

This commit adds `const`-correct overloads for `Array::{begin,end,rbegin,rend}`. These overloads are necessary for usage with [the GMock Container Matchers](http://google.github.io/googletest/reference/matchers.html#container-matchers), which cast the `Container` argument to a constant reference. (by Gregory Meyer (gregjm))
- 0292: restore the old epilogue for everything except streamk (#749)

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Haicheng Wu)
- 0293: Update PUBLICATIONS.md

Add coconet paper to the publication list.  @abhijangda (by Haicheng Wu)
- 0294: improve streamk load balance (#743)

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Haicheng Wu)
- 0295: Update README.md (by Matthew Nicely)
- 0296: Update README.md (by Matthew Nicely)
- 0297: Add missing #include directives (#741)

This commit adds two `#include` directives so that the definitions of `cutlass::gemm::warp::WarpSize` from "cutlass/gemm/warp/mma.h" and `cutlass::arch::OpClassSimt` from "cutlass/arch/mma.h" are visible to "cutlass/epilogue/threadblock/default_epilogue_simt.h". Without them, there are compiler errors when building the header standalone:

```
In file included from cutlass/include/cutlass/epilogue/threadblock/default_epilogue_simt.cu:1:
./cutlass/include/cutlass/epilogue/threadblock/default_epilogue_simt.h:351:32: error: no member named 'warp' in namespace 'cutlass::gemm'; did you mean simply 'warp'?
  static int const kWarpSize = cutlass::gemm::warp::WarpSize<arch::OpClassSimt>::value;
                               ^
./cutlass/include/cutlass/epilogue/warp/tile_iterator_simt.h:49:11: note: 'warp' declared here
namespace warp {
          ^
In file included from cutlass/include/cutlass/epilogue/threadblock/default_epilogue_simt.cu:1:
./cutlass/include/cutlass/epilogue/threadblock/default_epilogue_simt.h:351:53: error: no member named 'WarpSize' in namespace 'cutlass::epilogue::warp'
  static int const kWarpSize = cutlass::gemm::warp::WarpSize<arch::OpClassSimt>::value;
                                              ~~~~~~^
./cutlass/include/cutlass/epilogue/threadblock/default_epilogue_simt.h:351:68: error: no member named 'OpClassSimt' in namespace 'cutlass::arch'
  static int const kWarpSize = cutlass::gemm::warp::WarpSize<arch::OpClassSimt>::value;
                                                             ~~~~~~^
./cutlass/include/cutlass/epilogue/threadblock/default_epilogue_simt.h:351:82: error: no member named 'value' in the global namespace
  static int const kWarpSize = cutlass::gemm::warp::WarpSize<arch::OpClassSimt>::value;
                                                                               ~~^
./cutlass/include/cutlass/epilogue/threadblock/default_epilogue_simt.h:367:5: error: use of class template 'OutputTileThreadMap' requires template arguments
    OutputTileThreadMap,
    ^
./cutlass/include/cutlass/epilogue/threadblock/output_tile_thread_map.h:134:8: note: template is declared here
struct OutputTileThreadMap : public OutputTileThreadMapHelpers<Iterations_, Delta_> {
       ^
In file included from cutlass/include/cutlass/epilogue/threadblock/default_epilogue_simt.cu:1:
./cutlass/include/cutlass/epilogue/threadblock/default_epilogue_simt.h:391:5: error: use of class template 'OutputTileThreadMap' requires template arguments
    OutputTileThreadMap,
    ^
./cutlass/include/cutlass/epilogue/threadblock/output_tile_thread_map.h:134:8: note: template is declared here
struct OutputTileThreadMap : public OutputTileThreadMapHelpers<Iterations_, Delta_> {
       ^
In file included from cutlass/include/cutlass/epilogue/threadblock/default_epilogue_simt.cu:1:
./cutlass/include/cutlass/epilogue/threadblock/default_epilogue_simt.h:405:5: error: unknown type name 'OutputTileIterator'; did you mean 'WarpTileIterator'?
    OutputTileIterator,
    ^
./cutlass/include/cutlass/epilogue/threadblock/default_epilogue_simt.h:380:9: note: 'WarpTileIterator' declared here
  using WarpTileIterator = cutlass::epilogue::warp::TileIteratorSimtDirect2dConv<
        ^
./cutlass/include/cutlass/epilogue/threadblock/default_epilogue_simt.h:408:5: error: use of class template 'SharedLoadIterator' requires template arguments
    SharedLoadIterator,
    ^
./cutlass/include/cutlass/epilogue/threadblock/shared_load_iterator.h:67:7: note: template is declared here
class SharedLoadIterator {
      ^
``` (by Gregory Meyer (gregjm))
- 0298: minor chagnes (#730)

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Haicheng Wu)
- 0299: Updates for stream-k (#728)

Co-authored-by: Aniket Shivam <ashivam@nvidia.com> (by ANIKET SHIVAM)
- 0300: Add missing #include directive (#727) (by Gregory Meyer (gregjm))
- 0301: Make Python interface work for non-SM80 targets (#726)

* Make Python interface work for non-SM80 targets

* Remove line in README (by Jack Kosaian)
- 0302: Relax stream K gemm alignment constraints (#717)

* Relax stream K gemm alignment constraints

The current alignment requirements are too strict. Make them identical
to the checks for the regular universal gemm.

* Revert "Relax stream K gemm alignment constraints"

This reverts commit 31e80a250e2b0ac4bda2e4b437b39dc5bcd5e845.

* Relax stream K gemm alignment constraints

The current alignment requirements are too strict. Make them identical
to the checks for the regular universal gemm.

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Mike Iovine)
- 0303: Fix typos in conv problem sizes (#720)

* Fix typos in conv problem sizes

* Typos (by Ali Hassani)
- 0304: misc (#719)

* misc

* minor

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Haicheng Wu)
- 0305: fix: make arch.h self contained (#714) (by Wenzhuo Liu)
- 0306: Update quickstart.md (#704)

* Update quickstart.md

* Update doxygen_mainpage.md

* Update doxygen_mainpage.md

* Update terminology.md (by tpoisonooo)
- 0307: releaase 2.11 (#703) (by Aditya Atluri)
- 0308: add `#pragma once` for header file in example 42 (#698) (by Wenzhuo Liu)
- 0309: Fix identity sigmoid activation (#659)

* activation support Identity

* fix Sigmoid activation operator() with CUTLASS_HOST_DEVICE (by seventh)
- 0310: ensure singleton::get thread safe construct instance (#658)

* ensure singleton::get thread safe construct instance

* fix singleton return reference

Co-authored-by: xuweiqi <xuweiqi117@gmail.com> (by seventh)
- 0311: bug fixes and enharcement to gemm reductionK fusion (#682)

* add two missing files

* fix bunch of bugs of gemm-reducek fusion and add a device interface

* small changes

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Haicheng Wu)
- 0312: fix typo (#677) (by FZC)
- 0313: Example 43 - DualGemm (#670)

* Ex50 wip

* IS_PROFILING mode

* MultiStage2 - but is slower

* Add SwiGLU

* Support SplitKSerial reduction
Support not storing D0/D1
Cleanup code

* Option to disable bias

* Renumber example

* Fix build

* Remove references to pb_size_0 / pb_size_1

* Add support for bf16 inputs with float accum

* small changes

Co-authored-by: danthe3rd <danthe3rd>
Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by dan_the_3rd)
- 0314: Bump CUTLASS Python container version (#672)

* Update example 40 README

* Update CUTLASS Python README (by Jack Kosaian)
- 0315: Remove excessive includes from examples/41_multi_head_attention (#669)

The rationale behind this change is explained in #563 (by Yuriy Chernyshov)
- 0316: Add missing CUTLASS_HOST_DEVICE (#671) (by hlu1)
- 0317: ex42: Fused MHA imported from xFormers (#662)

* ex42: Fused MHA imported from xFormers

* Remove std:: references

* Support K>128 in the example

* Support causal option

* Support different head size for V, and different seqlength for KV

* Update FLOPS counter

* Remove bit_cast

* fix build: Replace M_LOG2E

* Add doc

* Revert "Remove bit_cast"

This reverts commit 9662fa86bb7c57c1a015ac0bf52cb52940fbbf80.

* Explicit casts to int32_t for windows build

Co-authored-by: danthe3rd <danthe3rd> (by dan_the_3rd)
- 0318: Update labeler.yml (by Matthew Nicely)
- 0319: Update labeler.yml (by Matthew Nicely)
- 0320: Update labeler.yml (by Matthew Nicely)
- 0321: Update labeler.yml (by Matthew Nicely)
- 0322: Update labeler.yml (by Matthew Nicely)
- 0323: Update labeler.yml (by Matthew Nicely)
- 0324: Correct typos in comments (#639)

* Correct typos in comments

Correct comments in code on type of generated distribution. Improve Gaussian RNG to take advantage of Box Muller method

* Inline Box Muller

Added inline function for the Box Muller algorithm and updated code comments to be more concise

* Update tensor_fill.h

* Update tensor_fill.h

* small changes to pass tests

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Alexander Freudenberg)
- 0325: Bug fix for gemm broadcast (#650)

* gemm_universal_with_broadcast, +2 sources.

* Revert "gemm_universal_with_broadcast, +2 sources."

This reverts commit fb063251f2144a091f12c9abfce7e1713f2d1c9e.

* gemm broadcast bug fix (by Ying Zhang)
- 0326: Create labeler.yml (by Matthew Nicely)
- 0327: change unused class member to local var (#646) (by Wenzhuo Liu)
- 0328: Fix release version in the citation (#638) (by ANIKET SHIVAM)
- 0329: fix(permute.h): incorrect comment in `Tensor5DPermute20314` (#637)

* fix(permute.h): incorrect comment in `Tensor5DPermute20314`

* typo in usage in example 39 (by Wenzhuo Liu)
- 0330: add two missing files (#636)

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Haicheng Wu)
- 0331: fix call of GELU_Taylor in LinearCombinationGeneric (#634) (by Tianqi Zhang (张天启))
- 0332: Gemm broadcast  (#632)

* gemm_universal_with_broadcast, +2 sources.

* Revert "gemm_universal_with_broadcast, +2 sources."

This reverts commit fb063251f2144a091f12c9abfce7e1713f2d1c9e.

* gemm_universal_with_broadcast separated version.

* Update copyright banner.

* update banner (by Ying Zhang)
- 0333: fix:comment typo in example 23 (#633) (by Wenzhuo Liu)
- 0334: add comment (#628) (by Yujia Zhai)
- 0335: CUTLASS 2.10 bug fixes and minor updates. (#626) (by Andrew Kerr)
- 0336: Add set_k_partition function (#624)

A member function set_k_partition is required for the instatiation of cutlass::gemm::kernel::Gemm, even though SplitKSerial is false (by alexfreudenberg)
- 0337: Minor README fix (#623)

* minor fix

* Minor fix (by ANIKET SHIVAM)
- 0338: CUTLASS 2.10 updates (#622)

Co-authored-by: Aniket Shivam <ashivam@nvidia.com> (by ANIKET SHIVAM)
- 0339: fix broken link (#620)

Co-authored-by: yuzhai <yuzhai@nvidia.com> (by Yujia Zhai)
- 0340: Include vector in base_grouped.h (#618) (by Jack Kosaian)
- 0341: upstream internal updates (#616)

Co-authored-by: yuzhai <yuzhai@nvidia.com> (by Yujia Zhai)
- 0342: CUTLASS 2.10 (#615)

Co-authored-by: Aniket Shivam <ashivam@nvidia.com> (by ANIKET SHIVAM)
- 0343: Fixed typo in class name (#608) (by Cliff Burdick)
- 0344: Added `value_type` trait to complex to make it an easier drop-in replacement for std::complex. (#607) (by Cliff Burdick)
- 0345: Missing comma in trmm header (#604) (by Cliff Burdick)
- 0346: Fixed typo in profiler README (#603) (by Cliff Burdick)
- 0347: Add residual support for shmem staging iterator used in back-to-back GEMM fusion. This allows support of problem_size_0_n that is not multiple of 32. (#590)

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Haicheng Wu)
- 0348: Fix for #596 (typo in example 03) (#597)

* [examples] Fix typos in SYRK and TRMM examples

* Fix typo in example 03 (by Jack Kosaian)
- 0349: fix: fix types in example 06 (#587) (by Michaël Benesty)
- 0350: Ensure all arch::Mma specializations have ElementC set (#576)

Co-authored-by: danthe3rd <danthe3rd@users.noreply.github.com> (by dan_the_3rd)
- 0351: fix gather example (#574) (by Shang Zhang)
- 0352: Remove redundant <fstream> includes (#563)

* Remove redundant <fstream> includes

* Fix fstream in examples/

* Fix <fstream> in test/

* Use consistent order for <fstream> (always after <iostream>)

* Remove an unneeded include in a file where std::ofstream usage is commented out

Co-authored-by: Ivan Komarov <dfyz@yandex-team.ru> (by Ivan Komarov)
- 0353: fix race condition when h < stride_h or w < stride_w (#562)

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Haicheng Wu)
- 0354: epilogue leaky relu support ScaleType (#564)

Co-authored-by: xuweiqi <xuweiqi117@gmail.com> (by seventh)
- 0355: Fix doc in testbed_gemm_with_broadcast (#559) (by Jacob He)
- 0356: [activation] tanh (#550)

Co-authored-by: Bing Xu <bingxu@fb.com> (by Bing Xu)
- 0357: Softmax (#546)

* add test layernorm g-mem version

* Delete include/configure directory

* Delete examples/test_layernorm directory

* Update gemm_with_softmax.h

* Update gemm_softmax.cu

* Update linear_combination.h

* Update fast_math.h

* remove redundant vars

Co-authored-by: yujia.zhai <yujia.zhai@bytedance.com>
Co-authored-by: yuzhai <yuzhai@nvidia.com> (by Yujia Zhai)
- 0358: Update linear_combination_generic.h (#472)

add `skip_elementwise_` to support serial splitk in linear_combination_generic.h` (by Haicheng Wu)
- 0359: Update CHANGELOG.md (by Haicheng Wu)
- 0360: Update README.md (by Haicheng Wu)
- 0361: add leaky relu (#542)

Authored-by: Haicheng Wu <haichengw@nvidia.com> (by Haicheng Wu)
- 0362: Update CHANGELOG.md (#543) (by Jinze (Richard) Xue)
- 0363: Add implicit gemm perf

plot from @manishucsd, presented in gtc'22 cutlass talk (by Haicheng Wu)
- 0364: Fix occupancy calculation for grouped GEMM (#532) (by Jack Kosaian)
- 0365: fix bugs in linear_combination_generic.h missing include cutlass/epilogue/thread/scale_type.h (#531) (by LiuWei)
- 0366: Create CITATION.cff

Add initial CITATION.cff (by Haicheng Wu)
- 0367: Increment stride correctly in warp iterator. (#516)

Co-authored-by: peisun1115 <peis@google.com> (by Pei Sun)
- 0368: Fix a comment about LDSM layout. (#514)

Co-authored-by: peisun1115 <peis@google.com> (by Pei Sun)
- 0369: Fix a bug to increment stride tile correctly (#503)

* Fix a bug to increment stride tile correctly

* Update regular_tile_access_iterator_tensor_op.h

Co-authored-by: peisun1115 <peis@google.com>
Co-authored-by: Haicheng Wu <57973641+hwu36@users.noreply.github.com> (by Pei Sun)
- 0370: [examples] Fix typos in SYRK and TRMM examples (#507) (by Jack Kosaian)
- 0371: Update gather_scatter_fusion.cu

Correct the reference code in gather/scatter example to put bias add in the correct place. (by Haicheng Wu)
- 0372: Update functionality.md (by Haicheng Wu)
- 0373: Fix init-self compiler warnings (#493)

Fix a few errors caused by trying to initialize a class member
with itself. These errors can turn into errors if you compile
with `-Winit-self`. (by Mike Iovine)
- 0374: Update functionality.md

add some explanations to the functionality table. (by Haicheng Wu)
- 0375: Update generator.py

stop generating analytical conv kernels to reduce kernel number (by Haicheng Wu)
- 0376: add verification of the reduction tensor (#489)

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Haicheng Wu)
- 0377: update float < int32_t * 4 (#488)

Co-authored-by: 赵俊涛 <zhaojuntao@zhaojuntaos-MacBook-Pro.local> (by TonyZhao)
- 0378: b2b bias vector support (#482)

* b2b bias vector support

* add files

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Haicheng Wu)
- 0379: 2.9 fixes for nvrtc (#480)

* Use platform::is_same instead of std::is_same

* Don't hide cuComplex include from nvrtc

* Typo fixed

* Remove comment rename (by Stepan Tezyunichev)
- 0380: add .github (#479)

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Haicheng Wu)
- 0381: Fix compilation in clang (#478)

- adds missing commas
- adjusts misaligned usage of CUTLASS_DEVICE between
  template declaration and specializations

Signed-off-by: Janusz Lisiecki <jlisiecki@nvidia.com> (by Janusz Lisiecki)
- 0382: Update linear_combination_generic.h (by Haicheng Wu)
- 0383: Update CHANGELOG.md (by Haicheng Wu)
- 0384: Update README.md (by Haicheng Wu)
- 0385: Used relative paths for includes (#477) (by Andrew Kerr)
- 0386: Update CMakeLists.txt (#473)

* Update CMakeLists.txt

Add 128bit int support if using nvc++ to solve #310 

@jeffhammond, would you please give it a try?

* Update CMakeLists.txt

correct copy paste error (by Haicheng Wu)
- 0387: Use platform:: instead of std::abs and std::conditional (#452)

* Fixed template struct/class mismatch

* Use platform implementation instead of std::abs and std::conditional during nvrtc compilation

* Use platform implementation instead of std::abs and std::conditional during nvrtc compilation

* Revert absolute_value() usage (by Stepan Tezyunichev)
- 0388: Fix typo in shared memory layout description (#471) (by Masahiro Masuda)
- 0389: Remove redundant offset def and init in shared_load_iterator.h (#456)

Signed-off-by: Fujun Han <fujun.han@iluvatar.ai> (by Fujun Han)
- 0390: Fixed template struct/class mismatch (#453) (by Stepan Tezyunichev)
- 0391: Fix CUDA_PERROR_EXIT and print failing expression (#446)

`CUDA_PERROR_EXIT ` can lead to incorrect usage (see e.g. [this description](https://www.cs.technion.ac.il/users/yechiel/c++-faq/macros-with-if.html)) because it contains an incomplete `if` expression. Consider:

```
if (condition)
    CUDA_PERROR_EXIT(cudaFree(x))
else
    free(x);
```

The author of the code forgot to add a semicolon after the macro. In that case, the `else` will bind to the `if` inside the macro definition, leading to code that the author did not intend or expect. It the author does use a semicolon, the code will not compile, which is awkward.

The change adds a `do while` around the `if`, which always requires a semicolon.

This PR also adds the text of the failing expression to the printed error message. (by Andrei Alexandrescu)
- 0392: fix description in example 12. (#444)

Co-authored-by: Exusial <Exusial> (by Exusial)
- 0393: [BUGFIX]: Force unroll a loop that doesn't have compilation constant (#441)

loop times is dangerous.

Signed-off-by: Peter Han <fujun.han@iluvatar.ai> (by Fujun Han)
- 0394: Fix link to Python example (#469) (by Jack Kosaian)
- 0395: CUTLASS 2.9 (#468) (by Andrew Kerr)
- 0396: [style] fix code indentation (#449)

* [docs] fix typo in media/docs/layout.md

* [docs] fix comment error

* fix typo in include/cutlass/arch/simd_61.h

* fix stride comment errors in TensorLayout

* fix indentation (by Feng Shijie)
- 0397: Update PUBLICATIONS.md (#447) (by Jianyu Huang)
- 0398: Update PUBLICATIONS.md

@tsuki (by Haicheng Wu)
- 0399: Transposed conv2d and wgrad split k examples (#413)

* add split k wgrad example

* wgrad done

* begin transposed conv2d example

* update transposed conv2d example and add ref check

* update doc for conv2d transpose example

* add license

* add wgrad doc

* more clarification on GEMM output type

* typo fix

* clean up indent

* address comments

* rename example numbers to 34 and 35

* GEMM -> Implicit GEMM

* Revert "rename example numbers to 34 and 35"

This reverts commit 551a808c227216e9e38d4472ba8ff020557b8500.

* transposed_conv2d is 34

* add compiler and device version check to exit gracefully

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Masahiro Masuda)
- 0400: [library] pass pointer of arguments to get_host_workspace_size() in gemm_universal() (#412)

Otherwise GemmUniversalOperation::get_host_workspace_size() will fail on SegmentFault. (by Minmin Sun (孙敏敏))
- 0401: fixed datatype error of numeric_limit for uint1b_t (#419)

Co-authored-by: Haojin Yang <haojin.yang@.hpi.uni-potsdam.de> (by Haojin Yang)
- 0402: Example 23 - Passing correct alpha and beta values with --parallel-split-k (#424)

When split-k is enabled, we should set alpha to 1 and beta to 0 for the
split-k gemm kernel.

The fix was from hwu36. I only did fixed some minor typos along with his
fix. (by Yang Chen)
- 0403: Fix separate compilation `-dc` (#433)

* Fix separate compilation `-dc`

- when cutlass is included in multiple compilation units
  compiled with `-dc` OOB_NAN_F16x8 device constant is
  instantiated multiple times causing
  Multiple definition of '_ZN7cutlass4arch13OOB_NAN_F16x8E' error
  This PR makes this variable a local constant as it is not
  modified during runtime

Signed-off-by: Janusz Lisiecki <jlisiecki@nvidia.com>

* Fix

Signed-off-by: Janusz Lisiecki <jlisiecki@nvidia.com>

* Test GH

Signed-off-by: Janusz Lisiecki <jlisiecki@nvidia.com>

* Revert test GH

Signed-off-by: Janusz Lisiecki <jlisiecki@nvidia.com> (by Janusz Lisiecki)
- 0404: Fix typo in profiler examples (#437) (by Yuanqiang Liu)
- 0405: Fix typo in docs, code comments (#429)

* [docs] fix typo in media/docs/layout.md

* [docs] fix comment error

* fix typo in include/cutlass/arch/simd_61.h

* fix stride comment errors in TensorLayout (by Feng Shijie)
- 0406: Update PUBLICATIONS.md

ACM Trans on Graphics from nv research. (by Haicheng Wu)
- 0407: Removed trivial copy constructors on parameter classes to enable devi… (#366)

* Removed trivial copy constructors on parameter classes to enable device-side launch of CUTLASS kernels

* Added SFINAE to the `TensorRef(NonConstTensorRef const&)` constructor to avoid making it a copy-constructor for device code

* std => platform

* fix affine2

* really fix affine2

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by HouQiming)
- 0408: Make cutlass::gemm::device::GemmArray usable (#295)

* Fix the build of cutlass/gemm/device/gemm_array.h and add a demo for GemmArray

* Add a reference to GemmArray to the docs

Co-authored-by: Ivan Komarov <dfyz@yandex-team.ru> (by Ivan Komarov)
- 0409: Actually use float accumulation in gemm_f16t_f16t_f16t_wmma_tensor_op… (#407)

* Actually use float accumulation in gemm_f16t_f16t_f16t_wmma_tensor_op_f32_sm70.cu

As title

* Update gemm_f16t_f16t_f16t_wmma_tensor_op_f32_sm70.cu

change the missing one

Co-authored-by: Haicheng Wu <57973641+hwu36@users.noreply.github.com> (by Jongsoo Park)
- 0410: Remove unused gemm_k_iterations in GemmKernel::Params (#406)

Otherwise we get gemm_k_iterations is uninitialized warnings. (by Jongsoo Park)
- 0411: Update PUBLICATIONS.md

@jackkosaian (by Haicheng Wu)
- 0412: [hardswish] correct implmentation (#403)

* [hardswish] correct implmentation

* seems working

* hardswish fp32/fp16x2 optimization

* [relu] half2 support

* add relu0; add multiply_add_relu0;

* cleanup

Co-authored-by: Bing Xu <bingxu@fb.com>
Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Bing Xu)
- 0413: Enable convolution with fused epilogue for Volta Tensor Cores (#402)

* Enabled convolution with epilogue fusion for Volta Tensor Cores.

* Compilation fixes

* Disabled testing Volta on Ampere architectures. (by Andrew Kerr)
- 0414: Support parallel split K mode for porfiling (#277)

* Support parallel split K mode for porfiling

Signed-off-by: Peter Han <fujun.han@iluvatar.ai>

* Parallel Split K support

  1. find gemm kernel by preference key
  2. switch m n for redution kernel

Signed-off-by: Peter Han <fujun.han@iluvatar.ai>

* parallel splitk for fp16 gemm

* add one missing file

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Fujun Han)
- 0415: Merge pull request #388 from depaulmillz/fix/headersonly

Fix utils include not being installed in header only (by Dustyn Blasig)
- 0416: Minor fix to change from LIBRARY_INIT to LIBRARY (by dePaul Miller)
- 0417: Update PUBLICATIONS.md

add mlsys 2022 paper. (by Haicheng Wu)
- 0418: Fix typo in scripts/library.py (wrong data size for u8) (#393) (by Masahiro Masuda)
- 0419: Add epilogue functor for residual block fusion (#391)

* Add epilogue functor for residual block fusion

* Do not run split-k tests when ActivationOp is not Identity

* explain TestSplitK param

* return early (by masahi)
- 0420: add the missing pieces (#392)

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by Haicheng Wu)
- 0421: Support half precision sigmoid activation (#378)

* Support half precision sigmoid activation

* introduce a vectorized variant using fast_tanh

* move the math to fast_math.h

* fixed compile

* .raw() -> .to_half()

Co-authored-by: Haicheng Wu <haichengw@nvidia.com> (by masahi)
- 0422: Fix utils include not being installed in header only (by dePaul Miller)
- 0423: Added missing synchronization to avoid WAR hazards between tiles. (#386) (by Andrew Kerr)
- 0424: Refactor GELU and Sigmoid epilogue to use a common template (and add SiLu, Hardswish epilogue) (#379)

* Support half precision sigmoid activation

* introduce a vectorized variant using fast_tanh

* refactored sigmoid using the new interface

* refactored gelu

* add silu activation

* add hardswish

* remove sigmoid for now

* add description to silu and hardswish, and other doc update

* Do not ignore Round

* use constant N

* Set isHeavy = true in sigmoid and silu epilogue (by masahi)
- 0425: Updates to fused epilogue (#383)

* Enhancements and fixes to fused GEMM and Convolution epilogue.
* Need to explicitly list cudart as unit test library dependency. (by Andrew Kerr)
- 0426: Updated README and added issue templates. (#382) (by Andrew Kerr)
- 0427: Merge pull request #381 from Peter9606/update-makefile-version

Update project version to 2.8.0 in CMakeLists.txt (by Haicheng Wu)
- 0428: Update project version to 2.8.0 in CMakeLists.txt

Signed-off-by: Peter Han <fujun.han@iluvatar.ai> (by Peter Han)
- 0429: Set theme jekyll-theme-minimal (by Matthew Nicely)
- 0430: Updated GEMM performance plot with CUTLASS 2.8 compiled with CUDA 11.5 Toolkit (#375)

Updated GEMM performance plot with CUTLASS 2.8 compiled using CUDA 11.5 Toolkit.

GPUs under test:

    NVIDIA A100
    NVIDIA A2
    NVIDIA TitanV
    NVIDIA GeForce 2080 Ti (by Andrew Kerr)
- 0431: Fixed contributor formatting. (#365) (by Andrew Kerr)
- 0432: Listed Matthew Nicely as the CUTLASS product manager.. (#364) (by Andrew Kerr)
- 0433: CUTLASS 2.8 (#363)

CUTLASS 2.8 (by Manish Gupta)
- 0434: Update quickstart.md

fix a broken link (by Haicheng Wu)
- 0435: Merge pull request #331 from reed-lau/feature/fix-wmma-shape-typo

fix wmma shape typo (by Haicheng Wu)
- 0436: fix wmma shape typo (by reed-lau)
- 0437: example 23 gemm operand reduction fusion (#325) (by Manish Gupta)
- 0438: CUTLASS 2.7 (#318)

CUTLASS 2.7

Mainloop fusion for GEMM: summation over A or B
Strided DGRAD (optimized iterators)
Half-precision GELU_taylor activation functions
Use these when accumulation and epilogue compute types are all cutlass::half_t
Tuning and bug fixes to fused GEMM + GEMM example
Support for smaller than 128b aligned Convolutions: see examples
Caching of results to accelerate Convolution unit tests
Can be enabled or disabled by running cmake .. -DCUTLASS_TEST_ENABLE_CACHED_RESULTS=OFF
Corrections and bug fixes reported by the CUTLASS community
Thank you for filing these issues!

authored-by: Haicheng Wu haichengw@nvidia.com, Manish Gupta manigupta@nvidia.com, Dustyn Blasig dblasig@nvidia.com, Andrew Kerr akerr@nvidia.com (by Manish Gupta)
- 0439: Merge pull request #246 from mengchihe/master

support unalignment input for conv2d fprop stage=2 Fix for issue #242 (by Haicheng Wu)
- 0440: refine the implementation (by Haicheng Wu)
- 0441: Merge remote-tracking branch 'origin/master' into small_alignment (by Haicheng Wu)
- 0442: CUTLASS 2.6.1 - functional and performance enhancements to strided DGRAD, fixes, and tuning

* cutlass 2.6 update

* remove debug prints

* cutlass 2.6.1 (minor update)

* Updated CHANGELOG.

* Minor edit to readme to indicate patch version.

* Minor edit to readme.

Co-authored-by:  Haicheng Wu <haichengw@nvidia.com>, Andrew Kerr <akerr@nvidia.com> (by Manish Gupta)
- 0443: Merge remote-tracking branch 'origin/master' into small_alignment (by Haicheng Wu)
- 0444: Merge pull request #308 from dongxiao92/patch-1

fix typo in doc (by Manish Gupta)
- 0445: fix typo in doc

fix typo (by dongxiao)
- 0446: Merge pull request #306 from NVIDIA/fix-profiler-cmd-doc

Fix profiler cmd doc (by Haicheng Wu)
- 0447: cleanup (by Haicheng Wu)
- 0448: clean profiler cmd and doc (by Haicheng Wu)
- 0449: Merge pull request #305 from NVIDIA/fix_epilogue_spill

fix epilogue register spill (by Manish Gupta)
- 0450: fix epilogue register spill (by Haicheng Wu)
- 0451: Merge pull request #303 from Peter9606/doc_typo

Doc typo (by Haicheng Wu)
- 0452: Doc typo

Signed-off-by: Peter Han <fujun.han@iluvatar.ai> (by Peter Han)
- 0453: Cutlass 2.6 Update 1 (#301)

* cutlass 2.6 update

* remove debug prints (by Manish Gupta)
- 0454: CUTLASS 2.6 (#298)

CUTLASS 2.6 (by Manish Gupta)
- 0455: Merge pull request #285 from tjingrant/patch-1

Typo Fixes (by Haicheng Wu)
- 0456: Update predicated_tile_iterator.h (by Tian Jin)
- 0457: Update predicated_tile_iterator.h (by Tian Jin)
- 0458: Update basic_gemm.cu

fix the matrix malloc size (by Haicheng Wu)
- 0459: Merge pull request #274 from mani-ananth/master

Some pending Bug fixes (by Haicheng Wu)
- 0460: update contributors (by Manikandan Ananth)
- 0461: bug fixes (by Manikandan Ananth)
- 0462: Merge pull request #272 from BernardoCovas/master

Bug in reference conv3d (by Haicheng Wu)
- 0463: fix typo in reference conv3d (by Bernardo Covas)
- 0464: Merge pull request #266 from mani-ananth/master

Fixes for public issue #265 (by Haicheng Wu)
- 0465: Fixes for public issue #265 (by Manikandan Ananth)
- 0466: Merge pull request #264 from zheng95z/patch-3

Adds `NoBetaScaling` for `LinearCombination` (by Haicheng Wu)
- 0467: Adds `NoBetaScaling` for `LinearCombination` (by Zheng Zeng)
- 0468: Merge pull request #259 from hzfan/ignore_pr

Add gitignore (by Haicheng Wu)
- 0469: fix (by Haozheng Fan)
- 0470: add gitignore (by Haozheng Fan)
- 0471: Merge pull request #239 from KeDengMS/kedeng/gelu

Fixes to Gelu for half and fusion (by Haicheng Wu)
- 0472: Merge pull request #237 from Peter9606/issue_236_typo

Typo fix issue#236 (by Haicheng Wu)
- 0473: Merge pull request #235 from Peter9606/issue_233_tranpose_update

tranpose.h update based on issue#233 (by Haicheng Wu)
- 0474: Merge pull request #256 from zheng95z/patch-2

Fixes some typos in utilities.md (by Haicheng Wu)
- 0475: Fixes some typos in utilities.md (by Zheng Zeng)
- 0476: Merge pull request #251 from zheng95z/patch-1

add a missing 'device_memory::' before a function (by Haicheng Wu)
- 0477: add a missing 'device_memory::' before a function (by Zheng Zeng)
- 0478: add unit test for non int4 load (by mengchi.hmc)
- 0479: Merge pull request #247 from xue-fc/patch-1

fix a wrong description (by Haicheng Wu)
- 0480: fix a wrong description (by xue-fc)
- 0481: support setting load granularity for conv2d fprop (by mengchi.hmc)
- 0482: support unalignment input for conv2d fprop stage=2 Fix for issue #242 (by mengchi.hmc)
- 0483: Address CR (by KeDengMS)
- 0484: More clean up (by KeDengMS)
- 0485: Clean up (by KeDengMS)
- 0486: Add test (by KeDengMS)
- 0487: Fixes to Gelu for half and fusion (by KeDengMS)
- 0488: Typo fix issue#236

Signed-off-by: Peter Han <fujun.han@iluvatar.ai> (by Peter Han)
- 0489: tranpose.h update based on issue#233

 1. Add 'pragma once' preprocess directive
 2. Replace prmt PTX with __byte_perm intrinsic

Signed-off-by: Peter Han <fujun.han@iluvatar.ai> (by Peter Han)
- 0490: Merge pull request #230 from mani-ananth/master

Fix for issue #221 (by Haicheng Wu)
- 0491: Merge branch 'master' of github.com:NVIDIA/cutlass (by Manikandan Ananth)
- 0492: fixing functional bug in fused epilogue (by Manikandan Ananth)
- 0493: Merge pull request #228 from mani-ananth/master

Fix for issue#224 and issue#225 (by Haicheng Wu)
- 0494: fix a broken sparse gemm example.  found by the community. (by Manikandan Ananth)
- 0495: add 2stage fprop 3d into default file (by Manikandan Ananth)
- 0496: Merge pull request #220 from Peter9606/wrong-stride-array-definition

Bugfix: typo, make reduction device cases passed (by Haicheng Wu)
- 0497: Merge pull request #219 from mani-ananth/master

Fix for issue #211 (by Haicheng Wu)
- 0498: Bugfix: typo, make reduction device cases passed

Signed-off-by: Peter Han <fujun.han@iluvatar.ai> (by Peter Han)
- 0499: Fix for public issue #211
- Add a slice-K tile size to the profiler
- fix num warps calculations in implicit gemm header (by Manikandan Ananth)
- 0500: Merge pull request #214 from Peter9606/separate-stream-error

Bugfix: memsetAsync uses wrong default stream (by Haicheng Wu)
- 0501: Revert wrong fix of params.update in GemmUniversalBase

Signed-off-by: Peter Han <fujun.han@iluvatar.ai> (by Peter Han)
- 0502: Bugfix: memsetAsync uses wrong default stream

Signed-off-by: Peter Han <fujun.han@iluvatar.ai> (by Peter Han)
- 0503: Merge pull request #193 from Peter9606/public_shape_type_from_Mma_HFMA2

HFMA2 Convolutions for SM60 onwards (by Haicheng Wu)
- 0504: fix test name to optimized and instance large tile sizes to speed unit tests (by Manish Gupta)
- 0505: Make arch tag of test cases more precisely to SM60

Signed-off-by: Peter Han <fujun.han@iluvatar.ai> (by Peter Han)
- 0506: Append fp16 test case to verify Mma_HFMA2

Signed-off-by: Peter Han <fujun.han@iluvatar.ai> (by Peter Han)
- 0507: Make Shape public from Mma_HFMA2.

Signed-off-by: Peter Han <fujun.han@iluvatar.ai> (by Peter Han)
- 0508: Create  PUBLICATIONS.md (#189) (by Haicheng Wu)
- 0509: Update generator.py (#192) (by Haicheng Wu)
- 0510: Merge pull request #187 from NVIDIA/cutlass_2.5

CUTLASS 2.5.0 (by Dustyn Blasig)
- 0511: Enabled reduction unit tests. (by Andrew Kerr)
- 0512: Enabled tensor reduction kernels. (by Andrew Kerr)
- 0513: Updated release notes. (by Andrew Kerr)
- 0514: CUTLASS 2.5 (by Andrew Kerr)
- 0515: cutlass 2.4 documentation only update (by Manish Gupta)
- 0516: fix broken links (#148) (by Yang Wang)
- 0517: CUTLASS 2.4 (Implicit GEMM convolution) (#147)

CUTLASS 2.4 (Implicit GEMM Convolution)

Co-authored-by: Manish Gupta <manigupta@nvidia.com>, Haicheng Wu <haichengw@nvidia.com>, Dustyn Blasig <dblasig@nvidia.com>, Andrew Kerr <akerr@nvidia.com> (by Manish Gupta)
- 0518: Merge pull request #135 from NVIDIA/cutlass_2.3_final

CUTLASS 2.3.0 (by Dustyn Blasig)
- 0519: CUTLASS 2.3.0 final. (by akerr)
- 0520: CUTLASS 2.3 initial commit (#134)

CUTLASS 2.3 adds GEMMs targeting Sparse Tensor Cores on the NVIDIA Ampere Architecture, fast SGEMM, and small matrix classes, bug fixes, and performance enhancements. (by Andrew Kerr)
- 0521: Typoes (#107)

* Update splitk_gemm.cu

* Update gemm_bias_relu.cu

* Update mma_sm75.h (by hwu36)
- 0522: Added examples to enable the unity build (#102)

* Updated documentation of fused GEMM example and removed UNITY BUILD batch size. The default batch size when unity build is enabled tends to be favorable. (by Andrew Kerr)
- 0523: Updated mma_sm80.h to avoid perf penalty due to reinterpret_cast<>. (#100)

- Updated mma_sm80.h to avoid perf penalty due to reinterpret_cast<>.
- Enhancement to CUTLASS Utility Library's HostTensorPlanarComplex template to support copy-in and copy-out
- Added test_examples target to build and test all CUTLASS examples
- Minor edits to documentation to point to GTC 2020 webinar (by Andrew Kerr)
- 0524: CUTLASS 2.2 (#96)

Adds support for NVIDIA Ampere Architecture features. CUDA 11 Toolkit recommended. (by Andrew Kerr)
- 0525: update tools/library/CMakeLists to require python 3.6 according to #70 (#82)

#70 only updates the documentation. This commit reflects this bump in python version to the CMake configuration as well. (by Vijay Thakkar)
- 0526: CUTLASS 2.1 (#83)

CUTLASS 2.1 contributes:
- BLAS-style host-side API added to CUTLASS Library
- Planar Complex GEMM kernels targeting Volta and Turing Tensor Cores
- Minor enhancements and bug fixes (by Andrew Kerr)
- 0527: Need Python 3.6 to use enum.auto() (#70) (by Andrew Kerr)
- 0528: Removed redundant conjugation operations from matrix_traits. (#65) (by Andrew Kerr)
- 0529: Improved formatting, clarity, and content of several documents. (#64)

* Improved formatting, clarity, and content of several documents. (by Andrew Kerr)
- 0530: Clang GPU compilation requires explicit CUDACC version flags (#63) (by Dustyn Blasig)
- 0531: CUTLASS 2.0 (#62)

CUTLASS 2.0

Substantially refactored for

- Better performance, particularly for native Turing Tensor Cores
- Robust and durable templates spanning the design space
- Encapsulated functionality embodying modern C++11 programming techniques
- Optimized containers and data types for efficient, generic, portable device code

Updates to:
- Quick start guide
- Documentation
- Utilities
- CUTLASS Profiler

Native Turing Tensor Cores
- Efficient GEMM kernels targeting Turing Tensor Cores
- Mixed-precision floating point, 8-bit integer, 4-bit integer, and binarized operands

Coverage of existing CUTLASS functionality:
- GEMM kernels targeting CUDA and Tensor Cores in NVIDIA GPUs
- Volta Tensor Cores through native mma.sync and through WMMA API
- Optimizations such as parallel reductions, threadblock rasterization, and intra-threadblock reductions
- Batched GEMM operations
- Complex-valued GEMMs

Note: this commit and all that follow require a host compiler supporting C++11 or greater. (by Andrew Kerr)
- 0532: Performance enhancement for Volta Tensor Cores TN layout (#53)

* Fixed performance defect with indirect access to pointer array for Volta TensorCores TN arrangement.

* Updated patch version and changelog.

* Updated patch version and changelog.

* Added link to changelog in readme.

* Fixed markdown link (by Andrew Kerr)
- 0533: Merge pull request #47 from Artem-B/cutlass-1.3-clang

Make CUTLASS compileable with Clang. (by Timmy)
- 0534: Addressed code review comments. (by Artem Belevich)
- 0535: Added missing file (#48) (by gthomascollignon)
- 0536: Make CUTLASS compileable with Clang.

Requires a recent clang build (r359248 or newer).

Enable compilation with clang with these options:
cmake -DCUDA_COMPILER=clang -DCMAKE_CXX_COMPILER=/path/to/clang++ (by Artem Belevich)
- 0537: cutlass 1.3.1 (#46)

CUTLASS 1.3.1 patch resolves failing text with NVRTC. (by Timmy)
- 0538: Cutlass 1.3 Release (#42)

CUTLASS 1.3 Release
- Efficient GEMM kernel targeting Volta Tensor Cores via mma.sync instruction added in CUDA 10.1. (by Andrew Kerr)
- 0539: Removed patch version from README.

Removed patch version from README. (by Andrew Kerr)
- 0540: Merge pull request #38 from NVIDIA/resolve_maxwell

Resolved issue for incorrect SGEMM on Maxwell architecture. (by Andrew Kerr)
- 0541: Resolved issue for incorrect SGEMM on Maxwell architecture. (by akerr)
- 0542: Merge pull request #33 from NVIDIA/cutlass_1.2

CUTLASS 1.2 (by Andrew Kerr)
- 0543: Minor edit to CHANGELOG. (by Andrew Kerr)
- 0544: Updating Doxygen docs (by Andrew Kerr)
- 0545: CUTLASS 1.2 (by akerr)
- 0546: Merge pull request #30 from NVIDIA/fix_utilities_example

Fixed cutlass_utilities example. (by Andrew Kerr)
- 0547: CUDA 9 lacks host-side conversions from float=>half. Instead, we must reinterpret_cast<> from cutlass::half_t => half. (by akerr)
- 0548: Merge pull request #28 from NVIDIA/cutlass_1.1

Fixed typeo (by Andrew Kerr)
- 0549: Fixed typeo

Fixed typeo (by Andrew Kerr)
- 0550: Merge pull request #26 from NVIDIA/cutlass_1.1

Clarification to README (by Andrew Kerr)
- 0551: Clarification to README (by akerr)
- 0552: Merge pull request #25 from NVIDIA/cutlass_1.1

Updated CUTLASS.md (by Andrew Kerr)
- 0553: Updated copyright of CUTLASS.md (by akerr)
- 0554: Merge pull request #24 from NVIDIA/cutlass_1.1

Cutlass 1.1 (by Andrew Kerr)
- 0555: Reduced range of random values to avoid bit-level inconsistencies for large matrices. (by akerr)
- 0556: Updated README and CHANGELOG. (by akerr)
- 0557: Updated doxygen (by akerr)
- 0558: Checkpointing CUTLASS 1.1 release. (by akerr)
- 0559: Merge pull request #15 from NVIDIA/release_1.0.1_edits

Minor edits to README and changelog pursuant CUTLASS 1.0.1 patch. (by Andrew Kerr)
- 0560: Edits to README and changelog pursuant CUTLASS 1.0.1 patch. (by akerr)
- 0561: Merge pull request #13 from NVIDIA/cutlass_v1.0.1

Cutlass v1.0.1 (by Andrew Kerr)
- 0562: Updated changelog. (by akerr)
- 0563: Replaced GoogleTest copy with submodule. Added updates to support intra-threadblock reductions. Added tests for same. (by akerr)
- 0564: Replaced GoogleTest copy with Git submodule. (by akerr)
- 0565: Merge pull request #10 from NVIDIA/cutlass_v1.0_rel

Minor updates to usage and README. (by Andrew Kerr)
- 0566: Minor updates to usage and readme. (by akerr)
- 0567: Merge pull request #9 from NVIDIA/cutlass_v1.0_rel

Updated URL to Doxygen and modified usage statement (by Andrew Kerr)
- 0568: Updated url to Doxygen and modified usage statement in performance test program. (by akerr)
- 0569: Merge pull request #8 from NVIDIA/cutlass_v1.0_rel

Configured Github Pages (by Andrew Kerr)
- 0570: Moved Doxygen documents. (by akerr)
- 0571: Set theme jekyll-theme-minimal (by Andrew Kerr)
- 0572: CUTLASS v1.0

CUTLASS v1.0 released. (by Andrew Kerr)
- 0573: Updated README.md (by akerr)
- 0574: Updated README.md (by akerr)
- 0575: CUTLASS v1.0 release (by akerr)
- 0576: Merge pull request #2 from Artem-B/clang-fixes

Merging "Clang fixes" into master. (by Andrew Kerr)
- 0577: Merge branch 'Artem-B-clang-fixes' (by akerr)
- 0578: Whitespace fix. (by Artem Belevich)
- 0579: Reworked CUDA_LOG macro to print location&the message with one printf.

This replies on the fact that clang allows using device-side features
from __host__/__device__ functions from __host__ ones as long as we
don't have to generate code for that. Wrapping thread/blockIdx in
__host__ __device__ function allows using CUDA_LOG everywhere during
host and device compilation. (by Artem Belevich)
- 0580: Added _cuda_ to the name of the executable to indicate that it's not clang's version. (by Artem Belevich)
- 0581: Force inlining of few functions that rely on that for performance.

Clang is less agressive than nvccnvcc, so number of functions did not getn
inlined into the kernel by default. That prevented SROA from eliminating
loads/stores to temporary buffers and resulted in abysmal performance.

Replaced inline with __forceinline__ to ensure that we do inline the
functions necessary for optimal performance. (by Artem Belevich)
- 0582: Fixed debug macros for clang.

Unlike nvcc, clang always sees both host and device-side code during
compilation. CUDA_LOG macro is used in both host and device code, so when it
expanded to contain device-only code, that resulted in errors when it was used
from the host-side functions.

In order to make CUDA_LOG work with clang it was split into two parts -- a pair
of target-attribute-based overloaded functions that perform host or device
specific parts of logging, and a printf which works on both sides. (by Artem Belevich)
- 0583: Make cutlass compilable with clang.

E.g:
PATH=/nvcc/path/bin:/clang/path/bin:$PATH make sm=35,60 compiler=clang all (by Artem Belevich)
- 0584: Update license info (by Duane Merrill)
- 0585: Update README.md (by Duane Merrill)
- 0586: Update README.md (by Duane Merrill)
- 0587: Update README.md (by Duane Merrill)
- 0588: Update README.md (by Duane Merrill)
- 0589: Update README.md (by Duane Merrill)
- 0590: Updating readme with relative per chart (by dumerrill)
- 0591: Update README.md (by Duane Merrill)
- 0592: Update README.md (by Duane Merrill)
- 0593: Update README.md (by Duane Merrill)
- 0594: Update README.md (by Duane Merrill)
- 0595: Update README.md (by Duane Merrill)
- 0596: Update README.md (by Duane Merrill)
- 0597: Update README.md (by Duane Merrill)
- 0598: Replace svg with png+text (by dumerrill)
- 0599: Adding figure to readme.md (by dumerrill)
- 0600: Update code formatting (by Duane Merrill)
- 0601: Improved formatting of Makefile (by akerr)
- 0602: Committing CUTLASS for release. (by akerr)
- 0603: Initial commit (by akerr)
- 0604: Initial commit (by Andrew Kerr) // Updated to include commit messages
    